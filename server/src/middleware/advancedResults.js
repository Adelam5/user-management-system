const advancedResults = (model) => async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Delete sort and page fields from reqQuery
  delete reqQuery["sort"];
  delete reqQuery["page"];

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Finding resource
  query = model.find(JSON.parse(queryStr));

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.find(JSON.parse(queryStr)).countDocuments();

  query = query.skip(startIndex).limit(limit);

  // Pagination result
  const pagination = { page, totalPages: Math.ceil(total / limit) };

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  // Execute query
  const results = await query;

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };

  next();
};

export default advancedResults;
