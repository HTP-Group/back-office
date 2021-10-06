export default class LocalStorageService {
	public static get(key: string): string | null {
		return localStorage.getItem(key);
	}

	public static set(key: string, value: string) {
		localStorage.setItem(key, value);
	}

	public static delete(key: string): void {
		localStorage.removeItem(key);
	}

	public static removeAll(): void {
		localStorage.clear();
	}
}
