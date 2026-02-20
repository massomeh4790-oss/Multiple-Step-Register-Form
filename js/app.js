import { formModel } from "./model.js";
import { formView } from "./view.js";
import { formController } from "./controller.js";

const model = new formModel();
const view = new formView();

const controller = new formController(model, view);
