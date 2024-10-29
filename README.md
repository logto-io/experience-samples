<p align="center">
  <a href="https://logto.io/?utm_source=github&utm_medium=readme" target="_blank" align="center" alt="Go to Logto website">
    <picture>
      <source width="200" media="(prefers-color-scheme: dark)" srcset="https://github.com/logto-io/.github/raw/master/profile/logto-logo-dark.svg">
      <source width="200" media="(prefers-color-scheme: light)" srcset="https://github.com/logto-io/.github/raw/master/profile/logto-logo-light.svg">
      <img width="200" src="https://github.com/logto-io/logto/raw/master/logo.png" alt="Logto logo">
    </picture>
  </a>
  <br/>
  <span><i><a href="https://logto.io" target="_blank">Logto</a> is the better identity infrastructure for developers.</i>
</p>

[![discord](https://img.shields.io/discord/965845662535147551?color=5865f2&label=discord)](https://discord.gg/vRvwuwgpVX)
[![cloud](https://img.shields.io/badge/cloud-available-7958ff)](https://cloud.logto.io/?sign_up=true&utm_source=github&utm_medium=repo_logto)

# Logto sign-in experience custom UI samples

| Name                                                                              | Description                                                              |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [Password sign-in sample](./packages/sign-in-with-password/)                      | A sample of using username and password to sign in.                      |
| [Password sign-up sample](./packages/sign-up-with-password/)                      | A sample of using username and password to register a new account.       |
| [Verification code sign-in sample](./packages/sign-in-with-verification-code/)    | A sample of using email and verification code to sign in.                |
| [Verification code sign-up sample](./packages/sign-up-with-verification-code/)    | A sample of using email and verification code to register a new account. |
| Social sign-in sample (working in progress...)                                    | A sample of using social connector to sign-in.                           |
| Enterprise SSO sign-in (working in progress...)                                   | A sample of using enterprise SSO connector to sign-in.                   |
| Sign-in and bind MFA (Working in progress...)                                     | A sample of signing-in and binding MFA.                                  |
| Sign-in with MFA verification (Working in progress...)                            | A sample of signing-in with MFA verification (TOTP, WebAuthn, etc.)      |
| Sign-in and fulfill profile (Working in progress...)                              | A sample of signing-in and fulfilling additional user profile info.      |
| Sign-up and fulfill profile (Working in progress...)                              | A sample of signing-up and fulfilling additional user profile info.      |
| Forgot password (Working in progress...)                                          | A sample of forgot password flow.                                        |

We'll keep adding more samples to this collection. If you have any ideas or requests, please feel free to [open an issue](https://github.com/logto-io/experience-samples/issues/new/choose)

## Deploy to Logto Cloud

You can build any of the individual sample projects and deploy to your Logto Cloud instance. Here is how you can do it:

1. Clone the repository
2. Go to the sample project you want to deploy. For example, `cd packages/sign-in-with-password`
3. Install node dependencies with `pnpm install` (recommended) or `npm install`.
4. Build the project with `pnpm build` (recommended) or `npm run build`. This will generate a `dist` folder with the built assets.
5. Sign in to your Logto Cloud account and create a Machine-to-Machine (M2M) application. Copy the `App ID` and `App secret` from the application settings.
6. Create a `.env` file in the sample project folder or root folder with the following content:

  ```env
  LOGTO_ENDPOINT=https://<your-tenant-id>.logto.app/
  LOGTO_AUTH=<your-app-id>:<your-app-secret>
  LOGTO_PATH=<your-workspace-path>/experience-samples/packages/sign-in-with-password/dist
  LOGTO_RESOURCE=https://<your-tenant-id>.logto.app/api
  ```
7. Run `npx logto-tunnel deploy` to deploy the sample custom experience to your Logto Cloud instance, and replace the default Logto sign-in experience. Refer to the [Logto tunnel documentation](https://docs.logto.io/docs/references/tunnel-cli/deploy/) for more details.

## Resources
- [🏠 Logto main repo](https://github.com/logto-io/logto)
- [📚 Logto docs](https://docs.logto.io/?utm_source=github&utm_medium=repo_logto)
- [📝 Logto blog](https://blog.logto.io/?utm_source=github&utm_medium=repo_logto)
- [🔗 Logto Experience API](https://bump.sh/logto/doc/logto-experience-api/?utm_source=github&utm_medium=repo_logto)

[^info]: Designed by Silverhand Inc.
