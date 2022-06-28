const { src, dest } = require('gulp');
const sass = require('gulp-sass')( require('sass') );

function css( done ) {
  src('src/scss/**/*.scss')  //Identificar el archivo
    .pipe( sass() ) //Compilar
    .pipe( dest('build/styles') ); //Guardar

  done();
}

exports.css = css;