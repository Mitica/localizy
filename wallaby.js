module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.ts',
            '!src/**/*.test.ts'
        ],
        tests: [
            'src/**/*.test.ts'
        ],
        env: {
            type: 'node',
            runner: 'node'
        },
        compilers: {
            // '**/*.ts': wallaby.compilers.babel({
            //     // Tell Wallaby to use Ava's Babel preset, necessary if your project doesn't use Babel otherwise.
            //     presets: ['@ava/babel-preset-stage-4']
            // })
            '**/*.ts?(x)': wallaby.compilers.typeScript({
                typescript: require('typescript')
            })
        },
        testFramework: 'ava',
        debug: true
    };
};
