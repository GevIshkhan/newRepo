import express, { Express, Request, Response } from "express";

const app: Express = express();
app.use(express.static("public"));
app.set("views", "views"), app.set("view engine", "ejs");
app.get("/", (req: Request, res: Response) => {
  res.render("home", { title: "tailwind" });
});

app.listen(80, () => {
  console.log("app runing on port 80");
});
