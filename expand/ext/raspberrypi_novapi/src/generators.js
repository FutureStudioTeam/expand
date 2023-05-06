export default [({
    lang: 'python',
    template: `# codes make you happy
### from #$$
### import #$$

###
# initialize variables
###{
  (this.$ALL_VARIABLES.length == 0)?undefined:this.$ALL_VARIABLES.map(n => n + ' = 0').join('\\n')
}#$$
#$$

# new class
### new_class #$$

### lib #$$

### code #$$
###
while True:
  # every tick
  ### loop #$$
#$$`,
    splitor: {
        frame: {
            left: '###',
            right: '#$$',
        },
        expression: {
            left: '{',
            right: '}',
        }
    },
    reducers: [{
        name: 'import',
        reduce: (codes) => {
            let codes1 = [];
            for (let code of codes) {
                let codeStr = '';
                if (typeof code === 'string') {
                    codeStr = code;
                } else if (typeof code === 'function') {
                    codeStr = code();
                }
                if (codes1.indexOf(codeStr) === -1) {
                    codes1.push(codeStr);
                }
            }
            if (codes1.length == 0) {
                return undefined;
            }
            return 'import ' + codes1.join(', ');
        }
    }]
})];