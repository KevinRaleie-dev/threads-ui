export function displayUsernameCharacter(username: string): string {

    const transform = username.slice()[0];
    return transform.toUpperCase();
}