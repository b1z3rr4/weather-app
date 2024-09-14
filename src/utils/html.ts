/**
 * 
 * @param strings 
 * @param value 
 * @returns string
 */
export function html(strings: TemplateStringsArray, ...value: unknown[]) {
    return String.raw(strings, ...value);
};

// rest parameters
// utilities -> utilitários