const skeletorTokenReplacePlugin = require('./index');

const replace = require('replace-in-file');
        
const validConfig = {
    files: 'path/to/file.config',
    from: 'originalContent',
    to: 'replacedContent'
};

const pluginOptions = {
	logger: {
        info: () => {},
        error: () => {}
    }
};

describe('token replace plugin', () => {

    beforeEach(() => {
        replace.mockClear();
    });

    it('run() should resolve with the correct response', async () => {
        const expectedResponse = {
            status: 'complete',
            message: 'Token replacement complete'
        };

        const response = await skeletorTokenReplacePlugin().run(validConfig, pluginOptions);
        return expect(response).toEqual(expectedResponse);
    });

    it('run() should resolve when passed the correct configuration', async () => {
        await skeletorTokenReplacePlugin().run(validConfig, pluginOptions);
		expect(replace).toHaveBeenCalledTimes(1);
		expect(replace).toHaveBeenCalledWith(validConfig);
    });

});