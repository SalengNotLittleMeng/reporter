        const bundle = await rollup.rollup(options);
        await bundle.write(options.output);