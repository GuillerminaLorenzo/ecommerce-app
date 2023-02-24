const layout = require('../layout');

const getError = (errors, props) => {
    try {
        return errors.mapped()[props].msg;
    } catch (err) {
        return '';
    }
};

module.exports = ({ errors }) => {
    return layout({ 
        content: `
            <div>
                <form method="POST">
                    <input name="email" type="email" placeholder="email" />
                    ${getError(errors, 'email')}
                    <input name="password" type="password" placeholder="password" />
                    ${getError(errors, 'password')}
                    <button>Sign In</button>
                </form>
            </div>
    `});
};