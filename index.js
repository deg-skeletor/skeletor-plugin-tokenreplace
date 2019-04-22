const replace = require('replace-in-file');

const run = (config, {logger}) => {
    if (config) {
        return replace(config)
            .then(results => ({
                status: 'complete',
                message: 'Token replacement complete'
            }))
            .catch(error => {
                logger.error(error);
                return {
                    status: 'error',
                    error: error
                };
            });
    }
    return Promise.resolve({
        status: 'error',
        error: 'Config options not found'
    });
};

module.exports = skeletorTokenReplacer = () => (
    {
        run
    }
);