var $builtinmodule = function (name) {
    var i;
    var sys = {};

    var args = [];
    var argv = Sk.getSysArgv();
    for (i = 0; i < argv.length; ++i) {
        args.push(new Sk.builtin.str(argv[i]));
    }
    sys.argv = new Sk.builtins["list"](args);

    sys.copyright = Sk.builtin["str"]("Copyright 2009-2010 Scott Graham.\nAll Rights Reserved.\n");

    sys.modules = Sk.sysmodules;

    sys.path = Sk.realsyspath;

    sys.getExecutionLimit = new Sk.builtin.func(function () {
        return Sk.builtin.assk$(Sk.execLimit, Sk.builtin.nmber.int$);
    });

    sys.setExecutionLimit = new Sk.builtin.func(function (t) {
        if (t !== undefined) {
            Sk.execLimit = Sk.builtin.asnum$(t);
        }
    });

    sys.resetTimeout = new Sk.builtin.func(function () {
        Sk.execStart = new Date();
    });

    sys.debug = new Sk.builtin.func(function () {
        debugger;
    });

    return sys;
};
