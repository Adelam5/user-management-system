import app from "./express";

import routeNotFound from "./middleware/notFound";
import errorHandler from "./middleware/errorHandler";

import userRouter from "./routes/user.routes";
import permissionRouter from "./routes/permission.routes";

app.use("/api/users", userRouter);
app.use("/api/permissions", permissionRouter);

app.use(routeNotFound);
app.use(errorHandler);

export default app;
