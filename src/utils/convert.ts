import type { FieldError } from "../generated/graphql";

export const convertToObject = (array: FieldError[]) => {

    const value: Record<string, string> = {};

    array.forEach(({field, message}) => {
        value[field!] = message;
    });

    return value;

}

export const replaceDashWithSpace = (s: string | undefined): string | undefined => {
    const param = s?.replaceAll("-", " ");
    return param;
}