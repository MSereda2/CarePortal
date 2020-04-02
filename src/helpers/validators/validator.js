export const requiredField = (value) => {
    if(value) return undefined;
    return 'Обязательное поле';  
}

export const firstCapitalLatter = value => {
    if(value && value[0] === value[0].toLowerCase()) return 'Первая буква должна быть большой';
    return undefined;
}

export const setMaxLength = (maxLength) => {
    return (value) => {
        if(value && value.length <= maxLength ) return undefined;
        return `max length ${maxLength}`
    }
}