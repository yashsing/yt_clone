export function isNullValue(value) {
    return value === null || value === undefined || (((typeof value) === "string") ? value.trim() : value) === "";
}