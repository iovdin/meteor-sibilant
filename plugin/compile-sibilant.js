var sibilant = Npm.require('sibilant');

handler = function (compileStep, isLiterate) {
    var source = compileStep.read().toString('utf8');
    try{
        var jsCode = sibilant.translateAll(source);
        var outputFile = compileStep.inputPath + ".js";
        compileStep.addJavaScript({
            path: outputFile,
            sourcePath: compileStep.inputPath,
            data: jsCode
        });
    } catch(e){
        //throw new Error( compileStep.inputPath + ':' + e);
        throw new Error(
            compileStep.inputPath + ':' +
                (e.location ? (e.location.first_line + ': ') : ' ') +
                e.message
        );
    }
};

Plugin.registerSourceHandler("sibilant", handler);
