import { series } from "gulp";
import pugToHtml from "./gulp-tasks/pug";
import pugMSD from "./gulp-tasks/pugMSD";
import styles from "./gulp-tasks/styles";
import script from "./gulp-tasks/script";
import imgMin from "./gulp-tasks/img";
import fonts from "./gulp-tasks/fonts";
import server from "./gulp-tasks/server";
import libs from "./gulp-tasks/libs";

const build = series(pugToHtml, styles, script, imgMin, fonts, libs);

const buildMSD = series(pugMSD);

const start = series(build, server);

export { build, start, buildMSD };
