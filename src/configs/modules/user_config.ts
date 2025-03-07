/**
 * Options for configuring a Pixiv user.
 * @interface
 */
interface UserConfigOptions {
  /** The Pixiv user ID, found in the profile URL (e.g., https://www.pixiv.net/users/xxxx). */
  user_id?: string

  /** The authentication cookie, obtainable via browser developer tools, or null if not available. */
  cookie?: string
}

/**
 * Represents a user's configuration for accessing Pixiv API.
 * This class encapsulates the user ID and cookie required for authentication.
 *
 * @class
 * @implements {UserConfigOptions}
 */
export class UserConfig implements UserConfigOptions {
  /** @inheritdoc */
  public user_id: string

  /** @inheritdoc */
  public cookie: string

  /**
   * Creates an instance of UserConfig with the provided options.
   *
   * @param {UserConfigOptions} options - The configuration options containing user ID and cookie.
   */
  constructor(options: UserConfigOptions = {}) {
    this.user_id = options.user_id ?? ''
    this.cookie = options.cookie ?? ''
  }
}
