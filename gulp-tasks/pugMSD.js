import { src, dest, series } from "gulp";
import pug from "gulp-pug";
import plumber from "gulp-plumber";
import readlineSync from "readline-sync";
import replace from "gulp-replace";
import htmlbeautify from "gulp-html-beautify";

let siteName;

const createSiteName = function (done) {
  siteName = readlineSync.question("What's your website name? ");
  done();
};

const pugMsd = () =>
  src(["app/pages/*.pug", "!app/pages/layout.pug"])
    .pipe(plumber())
    .pipe(pug())
    .pipe(replace(/img\//gm, `/promo/${siteName}/img/`))
    .pipe(replace(/css\//gm, `/promo/${siteName}/css/`))
    .pipe(replace(/js\//gm, `/promo/${siteName}/js/`))
    .pipe(htmlbeautify())
    .pipe(dest(`distMSD`));

export default series(createSiteName, pugMsd);
