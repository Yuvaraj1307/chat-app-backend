export const validateObject = (data: Record<string, string>, fields: string[]): string[] | undefined => {
    const errors: string[] = [];
    fields.forEach(field => {
        if (!data[field]) {
            errors.push(field);
        }
    });
    return errors.length ? errors : undefined;
}

export const toStartCase = (text: string): string => {
    return text.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase());
}

export const uuidv4 = (): string => {
    const chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    return chars.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
