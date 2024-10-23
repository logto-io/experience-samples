/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @example {"input":{"username":"Username","password":"Password"},"action":{"sign_in":"Sign In","continue":"Continue"}} */
export interface TranslationObject {
  "[translationKey]"?: Translation;
}

export type Translation = string;

export type InitInteractionData = any;

export type UpdateInteractionEventData = any;

export type IdentifyUserData = any;

export interface SubmitInteractionData {
  redirectTo: string;
}

export interface CreatePasswordVerificationData {
  /** The unique verification ID of the newly created Password verification record. The `verificationId` is required when verifying the user's identity via the `Identification` API. */
  verificationId: string;
}

export interface CreateAndSendVerificationCodeData {
  /** The unique ID of the verification record. Required to verify the code. */
  verificationId: string;
}

export interface VerifyVerificationCodeVerificationData {
  /** he unique ID of the verification record. Required for user identification via the `Identification` API or to bind the identifier to the user's account via the `Profile` API. */
  verificationId: string;
}

export interface CreateSocialVerificationData {
  /** The social authorization URI. */
  authorizationUri: string;
  /** The unique verification ID of the newly created SocialVerification record. The `verificationId` is required when verifying the social authorization response. */
  verificationId: string;
}

export interface VerifySocialVerificationData {
  /** The unique verification ID of the SocialVerification record. This ID is required when identifying the user in the current interaction. */
  verificationId: string;
}

export interface CreateEnterpriseSsoVerificationData {
  /** The SSO authorization URI. */
  authorizationUri: string;
  /** The unique verification ID of the newly created EnterpriseSSO verification record. The `verificationId` is required when verifying the SSO authorization response. */
  verificationId: string;
}

export interface VerifyEnterpriseSsoVerificationData {
  /** The current verified EnterpriseSSO verification record ID. This ID is required when identifying the user in the current interaction. */
  verificationId: string;
}

export interface CreateTotpSecretData {
  /** The unique verification ID for the TOTP record. This ID is required to verify the TOTP code. */
  verificationId: string;
  /** The newly generated TOTP secret. */
  secret: string;
  /** A QR code image data URL for the TOTP secret. The user can scan this QR code with their TOTP authenticator app. */
  secretQrCode: string;
}

export interface VerifyTotpVerificationData {
  /** The unique verification ID of the TOTP verification record. For newly created TOTP secret verification record, this ID is required to bind the TOTP secret to the user account through `Profile` API. */
  verificationId: string;
}

export interface CreateWebAuthnRegistrationVerificationData {
  /** The unique verification ID for the WebAuthn registration record. This ID is required to verify the WebAuthn registration challenge. */
  verificationId: string;
  /** The WebAuthn registration options that the user needs to create a new WebAuthn credential. */
  registrationOptions: {
    rp: {
      name: string;
      id?: string;
    };
    user: {
      id: string;
      name: string;
      displayName: string;
    };
    challenge: string;
    pubKeyCredParams: {
      /** @format "public-key" */
      type: string;
      alg: number;
    }[];
    timeout?: number;
    excludeCredentials?: {
      /** @format "public-key" */
      type: string;
      id: string;
      transports?: ("usb" | "nfc" | "ble" | "internal" | "cable" | "hybrid" | "smart-card")[];
    }[];
    authenticatorSelection?: {
      authenticatorAttachment?: "platform" | "cross-platform";
      requireResidentKey?: boolean;
      residentKey?: "discouraged" | "preferred" | "required";
      userVerification?: "required" | "preferred" | "discouraged";
    };
    attestation?: "none" | "indirect" | "direct" | "enterprise";
    extensions?: {
      appid?: string;
      credProps?: boolean;
      hmacCreateSecret?: boolean;
    };
  };
}

export interface VerifyWebAuthnRegistrationVerificationData {
  /** The unique verification ID of the WebAuthn registration record. This `verificationId` is required to bind the WebAuthn credential to the user account via the `Profile` API. */
  verificationId: string;
}

export interface CreateWebAuthnAuthenticationVerificationData {
  /** The unique ID for the WebAuthn authentication record, required to verify the WebAuthn authentication challenge. */
  verificationId: string;
  /** Options for the user to authenticate with their WebAuthn credential. */
  authenticationOptions: {
    challenge: string;
    timeout?: number;
    rpId?: string;
    allowCredentials?: {
      /** @format "public-key" */
      type: string;
      id: string;
      transports?: ("usb" | "nfc" | "ble" | "internal" | "cable" | "hybrid" | "smart-card")[];
    }[];
    userVerification?: "required" | "preferred" | "discouraged";
    extensions?: {
      appid?: string;
      credProps?: boolean;
      hmacCreateSecret?: boolean;
    };
  };
}

export interface VerifyWebAuthnAuthenticationVerificationData {
  /** The unique verification ID of the WebAuthn authentication verification record. */
  verificationId: string;
}

export interface GenerateBackupCodesData {
  /** The unique verification ID of the newly created BackupCode verification record. This ID is required when adding the backup codes to the user profile via the Profile API. */
  verificationId: string;
  /** The generated backup codes. */
  codes: string[];
}

export interface VerifyBackupCodeData {
  /** The unique verification ID of the BackupCode verification record. */
  verificationId: string;
}

export interface CreateNewPasswordIdentityVerificationData {
  /** The unique verification ID of the newly created NewPasswordIdentity verification record. The `verificationId` is required when creating a new user account via the `Identification` API. */
  verificationId: string;
}

export type AddUserProfileData = any;

export type ResetUserPasswordData = any;

export type SkipMfaBindingFlowData = any;

export type BindMfaVerificationData = any;

export interface GetEnabledSsoConnectorsData {
  /** The list of enabled SSO connectorIds. Returns an empty array if no enabled SSO connectors are found. */
  connectorIds: string[];
}

export type InteractionUpdateData = any;

export type InteractionDeleteData = any;

export type InteractionEventUpdateData = any;

export type InteractionIdentifiersPartialUpdateData = any;

export type InteractionProfileUpdateData = any;

export type InteractionProfilePartialUpdateData = any;

export type InteractionProfileDeleteData = any;

export interface InteractionSubmitCreateData {
  redirectTo: string;
}

export type InteractionConsentCreateData = any;

export interface InteractionConsentListData {
  application: {
    /**
     * @minLength 1
     * @maxLength 21
     */
    id: string;
    /**
     * @minLength 1
     * @maxLength 256
     */
    name: string;
    branding?: {
      /** @format url */
      logoUrl?: string;
      /** @format url */
      darkLogoUrl?: string;
      /** @format url */
      favicon?: string;
      /** @format url */
      darkFavicon?: string;
    };
    /** @maxLength 256 */
    displayName?: string | null;
    /** @maxLength 2048 */
    privacyPolicyUrl?: string | null;
    /** @maxLength 2048 */
    termsOfUseUrl?: string | null;
  };
  user: {
    /**
     * @minLength 1
     * @maxLength 12
     */
    id: string;
    /** @maxLength 128 */
    name: string | null;
    /** @maxLength 2048 */
    avatar: string | null;
    /** @maxLength 128 */
    username: string | null;
    /** @maxLength 128 */
    primaryEmail: string | null;
    /** @maxLength 128 */
    primaryPhone: string | null;
  };
  organizations?: {
    /**
     * @minLength 1
     * @maxLength 21
     */
    id: string;
    /**
     * @minLength 1
     * @maxLength 128
     */
    name: string;
    missingResourceScopes?: {
      resource: {
        /** @minLength 1 */
        name: string;
        /** @minLength 1 */
        indicator: string;
        id: string;
      };
      scopes: {
        /**
         * @minLength 1
         * @maxLength 21
         */
        id: string;
        /**
         * @minLength 1
         * @maxLength 256
         */
        name: string;
        description: string | null;
      }[];
    }[];
  }[];
  missingOIDCScope?: string[];
  missingResourceScopes?: {
    resource: {
      /** @minLength 1 */
      name: string;
      /** @minLength 1 */
      indicator: string;
      id: string;
    };
    scopes: {
      /**
       * @minLength 1
       * @maxLength 21
       */
      id: string;
      /**
       * @minLength 1
       * @maxLength 256
       */
      name: string;
      description: string | null;
    }[];
  }[];
  redirectUri: string;
}

export interface InteractionVerificationSocialAuthorizationUriCreateData {
  redirectTo: string;
}

export type InteractionVerificationVerificationCodeCreateData = any;

export interface InteractionVerificationTotpCreateData {
  secret: string;
  secretQrCode: string;
}

export interface InteractionVerificationWebauthnRegistrationCreateData {
  rp: {
    name: string;
    id?: string;
  };
  user: {
    id: string;
    name: string;
    displayName: string;
  };
  challenge: string;
  pubKeyCredParams: {
    /** @format "public-key" */
    type: string;
    alg: number;
  }[];
  timeout?: number;
  excludeCredentials?: {
    /** @format "public-key" */
    type: string;
    id: string;
    transports?: ("usb" | "nfc" | "ble" | "internal" | "cable" | "hybrid" | "smart-card")[];
  }[];
  authenticatorSelection?: {
    authenticatorAttachment?: "platform" | "cross-platform";
    requireResidentKey?: boolean;
    residentKey?: "discouraged" | "preferred" | "required";
    userVerification?: "required" | "preferred" | "discouraged";
  };
  attestation?: "none" | "indirect" | "direct" | "enterprise";
  extensions?: {
    appid?: string;
    credProps?: boolean;
    hmacCreateSecret?: boolean;
  };
}

export interface InteractionVerificationWebauthnAuthenticationCreateData {
  challenge: string;
  timeout?: number;
  rpId?: string;
  allowCredentials?: {
    /** @format "public-key" */
    type: string;
    id: string;
    transports?: ("usb" | "nfc" | "ble" | "internal" | "cable" | "hybrid" | "smart-card")[];
  }[];
  userVerification?: "required" | "preferred" | "discouraged";
  extensions?: {
    appid?: string;
    credProps?: boolean;
    hmacCreateSecret?: boolean;
  };
}

export type InteractionBindMfaCreateData = any;

export type InteractionMfaUpdateData = any;

export type InteractionMfaSkippedUpdateData = any;

export interface InteractionSingleSignOnAuthorizationUrlCreateData {
  redirectTo: string;
}

export interface InteractionSingleSignOnAuthenticationCreateData {
  redirectTo: string;
}

export interface InteractionSingleSignOnRegistrationCreateData {
  redirectTo: string;
}

export type InteractionSingleSignOnConnectorsListData = string[];

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://[tenant_id].logto.app/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title Logto experience API references
 * @version Cloud
 * @baseUrl https://[tenant_id].logto.app/
 *
 * API references for Logto experience interaction.
 *
 * Note: The documentation is for Logto Cloud. If you are using Logto OSS, please refer to the response of `/api/swagger.json` endpoint on your Logto instance.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  experience = {
    /**
     * @description Init a new experience interaction with the given interaction type. Any existing interaction data will be cleared.
     *
     * @tags Experience
     * @name InitInteraction
     * @summary Init new interaction
     * @request PUT:/api/experience
     */
    initInteraction: (
      data: {
        interactionEvent: "SignIn" | "Register" | "ForgotPassword";
      },
      params: RequestParams = {},
    ) =>
      this.request<InitInteractionData, void>({
        path: `/api/experience`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update the current experience interaction event to the given event type. This API is used to switch the interaction event between `SignIn` and `Register`, while keeping all the verification records data.
     *
     * @tags Experience
     * @name UpdateInteractionEvent
     * @summary Update interaction event
     * @request PUT:/api/experience/interaction-event
     */
    updateInteractionEvent: (
      data: {
        /** The type of the interaction event. Only `SignIn` and `Register` are supported. */
        interactionEvent: "SignIn" | "Register" | "ForgotPassword";
      },
      params: RequestParams = {},
    ) =>
      this.request<UpdateInteractionEventData, void>({
        path: `/api/experience/interaction-event`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This API identifies the user based on the verificationId within the current experience interaction: <br/>- `SignIn` and `ForgotPassword` interactions: Verifies the user's identity using the provided `verificationId`. <br/>- `Register` interaction: Creates a new user account using the profile data from the current interaction. If a verificationId is provided, the profile data will first be updated with the verification record before creating the account. If not, the account is created directly from the stored profile data.
     *
     * @tags Experience
     * @name IdentifyUser
     * @summary Identify user for the current interaction
     * @request POST:/api/experience/identification
     */
    identifyUser: (
      data: {
        /** The ID of the verification record used to identify the user. <br/>- `SignIn` and `ForgotPassword` interactions: Required to verify the user's identity. <br/>- `Register` interaction: Optional. If provided, it updates the profile data with the verification record before account creation. If omitted, the account is created using existing profile data in the current interaction. */
        verificationId?: string;
        /** Applies to the SignIn interaction only, and is used when a SocialVerification type verificationId is provided. <br/>- If `true`, the user is identified using the verified email or phone number from the social identity provider, and the social identity is linked to the user's account. <br/>- If `false` or not provided, the API identifies the user solely through the social identity. <br/> This parameters is used for linking a non-existing social identity to a related user account that can be identified through the verified email or phone number. */
        linkSocialIdentity?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<IdentifyUserData, void>({
        path: `/api/experience/identification`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit the current interaction. <br/>- Submit the verified user identity to the OIDC provider for further authentication (SignIn and Register). <br/>- Update the user's profile data if any (SignIn and Register). <br/>- Reset the password and clear all the interaction records (ForgotPassword).
     *
     * @tags Experience
     * @name SubmitInteraction
     * @summary Submit interaction
     * @request POST:/api/experience/submit
     */
    submitInteraction: (params: RequestParams = {}) =>
      this.request<SubmitInteractionData, void>({
        path: `/api/experience/submit`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Create and verify a new Password verification record. The verification record can only be created if the provided user credentials are correct.
     *
     * @tags Experience
     * @name CreatePasswordVerification
     * @summary Create password verification record
     * @request POST:/api/experience/verification/password
     */
    createPasswordVerification: (
      data: {
        /** The unique identifier of the user that will be used to identify the user along with the provided password. */
        identifier: {
          type: "username" | "email" | "phone";
          value: string;
        };
        /**
         * The user password.
         * @minLength 1
         */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreatePasswordVerificationData, void>({
        path: `/api/experience/verification/password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new `CodeVerification` record and sends the code to the specified identifier. The code verification can be used to verify the given identifier.
     *
     * @tags Experience
     * @name CreateAndSendVerificationCode
     * @summary Create and send verification code
     * @request POST:/api/experience/verification/verification-code
     */
    createAndSendVerificationCode: (
      data: {
        /** The identifier (email address or phone number) to send the verification code to. */
        identifier: {
          type: "email" | "phone";
          value: string;
        };
        /** The interaction event for which the verification code will be used. Supported values are `SignIn`, `Register`, and `ForgotPassword`. This determines the template for the verification code. */
        interactionEvent: "SignIn" | "Register" | "ForgotPassword";
      },
      params: RequestParams = {},
    ) =>
      this.request<CreateAndSendVerificationCodeData, void>({
        path: `/api/experience/verification/verification-code`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Verify the provided verification code against the user's identifier. If successful, the verification record will be marked as verified.
     *
     * @tags Experience
     * @name VerifyVerificationCodeVerification
     * @summary Verify verification code
     * @request POST:/api/experience/verification/verification-code/verify
     */
    verifyVerificationCodeVerification: (
      data: {
        /** The identifier (email address or phone number) to verify the code against. Must match the identifier used to send the verification code. */
        identifier: {
          type: "email" | "phone";
          value: string;
        };
        /** The verification ID of the CodeVerification record. */
        verificationId: string;
        /** The verification code to be verified. */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VerifyVerificationCodeVerificationData, void>({
        path: `/api/experience/verification/verification-code/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new SocialVerification record and return the provider's authorization URI for the given connector.
     *
     * @tags Experience
     * @name CreateSocialVerification
     * @summary Create social verification
     * @request POST:/api/experience/verification/social/{connectorId}/authorization-uri
     */
    createSocialVerification: (
      connectorId: string,
      data: {
        /** The state parameter to pass to the social connector. */
        state: string;
        /** The URI to redirect the user after the social authorization is completed. */
        redirectUri: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreateSocialVerificationData, void>({
        path: `/api/experience/verification/social/${connectorId}/authorization-uri`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Verify the social authorization response data and get the user's identity data from the social provider.
     *
     * @tags Experience
     * @name VerifySocialVerification
     * @summary Verify social verification
     * @request POST:/api/experience/verification/social/{connectorId}/verify
     */
    verifySocialVerification: (
      connectorId: string,
      data: {
        /** Arbitrary data returned by the social provider to complete the verification process. */
        connectorData: object;
        /** The ID of the Social verification record. */
        verificationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VerifySocialVerificationData, void>({
        path: `/api/experience/verification/social/${connectorId}/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new EnterpriseSSO verification record and return the provider's authorization URI for the given connector.
     *
     * @tags Experience
     * @name CreateEnterpriseSsoVerification
     * @summary Create enterprise SSO verification
     * @request POST:/api/experience/verification/sso/{connectorId}/authorization-uri
     */
    createEnterpriseSsoVerification: (
      connectorId: string,
      data: {
        /** The state parameter to pass to the SSO connector. */
        state: string;
        /** The URI to redirect the user after the SSO authorization is completed. */
        redirectUri: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreateEnterpriseSsoVerificationData, void>({
        path: `/api/experience/verification/sso/${connectorId}/authorization-uri`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Verify the SSO authorization response data and get the user's identity from the SSO provider.
     *
     * @tags Experience
     * @name VerifyEnterpriseSsoVerification
     * @summary Verify enterprise SSO verification
     * @request POST:/api/experience/verification/sso/{connectorId}/verify
     */
    verifyEnterpriseSsoVerification: (
      connectorId: string,
      data: {
        /** Arbitrary data returned by the SSO provider to complete the verification process. */
        connectorData: object;
        /** The ID of the EnterpriseSSO verification record. */
        verificationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VerifyEnterpriseSsoVerificationData, void>({
        path: `/api/experience/verification/sso/${connectorId}/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new TOTP verification record and generate a new TOTP secret for the user. This secret can be used to bind a new TOTP verification to the user's profile. The verification record must be verified before the secret can be used to bind a new TOTP verification to the user's profile.
     *
     * @tags Experience
     * @name CreateTotpSecret
     * @summary Create TOTP secret
     * @request POST:/api/experience/verification/totp/secret
     */
    createTotpSecret: (params: RequestParams = {}) =>
      this.request<CreateTotpSecretData, void>({
        path: `/api/experience/verification/totp/secret`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Verifies the provided TOTP code against the new created TOTP secret or the existing TOTP secret. If a verificationId is provided, this API will verify the code against the TOTP secret that is associated with the verification record. Otherwise, a new TOTP verification record will be created and verified against the user's existing TOTP secret.
     *
     * @tags Experience
     * @name VerifyTotpVerification
     * @summary Verify TOTP verification
     * @request POST:/api/experience/verification/totp/verify
     */
    verifyTotpVerification: (
      data: {
        /**
         * The TOTP code to be verified.
         * @minLength 1
         */
        code: string;
        /** The verification ID of the newly created TOTP secret. This ID is required to verify a newly created TOTP secret that needs to be bound to the user account. If not provided, the API will create a new TOTP verification record and verify the code against the user's existing TOTP secret. */
        verificationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VerifyTotpVerificationData, void>({
        path: `/api/experience/verification/totp/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new WebAuthn registration verification record. The verification record can be used to bind a new WebAuthn credential to the user's profile.
     *
     * @tags Experience
     * @name CreateWebAuthnRegistrationVerification
     * @summary Create WebAuthn registration verification
     * @request POST:/api/experience/verification/web-authn/registration
     */
    createWebAuthnRegistrationVerification: (params: RequestParams = {}) =>
      this.request<CreateWebAuthnRegistrationVerificationData, void>({
        path: `/api/experience/verification/web-authn/registration`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Verify the WebAuthn registration response against the user's WebAuthn registration challenge. If the response is valid, the WebAuthn registration record will be marked as verified.
     *
     * @tags Experience
     * @name VerifyWebAuthnRegistrationVerification
     * @summary Verify WebAuthn registration verification
     * @request POST:/api/experience/verification/web-authn/registration/verify
     */
    verifyWebAuthnRegistrationVerification: (
      data: {
        /** The verification ID of the WebAuthn registration record. */
        verificationId: string;
        /** The WebAuthn attestation response from the user's WebAuthn credential. */
        payload: {
          /** @format "WebAuthn" */
          type: string;
          id: string;
          rawId: string;
          response: {
            clientDataJSON: string;
            attestationObject: string;
            authenticatorData?: string;
            transports?: ("usb" | "nfc" | "ble" | "internal" | "cable" | "hybrid" | "smart-card")[];
            publicKeyAlgorithm?: number;
            publicKey?: string;
          };
          authenticatorAttachment?: "cross-platform" | "platform";
          clientExtensionResults: {
            appid?: boolean;
            crepProps?: {
              rk?: boolean;
            };
            hmacCreateSecret?: boolean;
          };
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<VerifyWebAuthnRegistrationVerificationData, void>({
        path: `/api/experience/verification/web-authn/registration/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new WebAuthn authentication verification record based on the user's existing WebAuthn credential. This verification record can be used to verify the user's WebAuthn credential.
     *
     * @tags Experience
     * @name CreateWebAuthnAuthenticationVerification
     * @summary Create WebAuthn authentication verification
     * @request POST:/api/experience/verification/web-authn/authentication
     */
    createWebAuthnAuthenticationVerification: (params: RequestParams = {}) =>
      this.request<CreateWebAuthnAuthenticationVerificationData, void>({
        path: `/api/experience/verification/web-authn/authentication`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Verifies the WebAuthn authentication response against the user's authentication challenge. Upon successful verification, the verification record will be marked as verified.
     *
     * @tags Experience
     * @name VerifyWebAuthnAuthenticationVerification
     * @summary Verify WebAuthn authentication verification
     * @request POST:/api/experience/verification/web-authn/authentication/verify
     */
    verifyWebAuthnAuthenticationVerification: (
      data: {
        /** The verification ID of the WebAuthn authentication verification record. */
        verificationId: string;
        /** The WebAuthn assertion response from the user's WebAuthn credential. */
        payload: {
          /** @format "WebAuthn" */
          type: string;
          id: string;
          rawId: string;
          authenticatorAttachment?: "cross-platform" | "platform";
          clientExtensionResults: {
            appid?: boolean;
            crepProps?: {
              rk?: boolean;
            };
            hmacCreateSecret?: boolean;
          };
          response: {
            clientDataJSON: string;
            authenticatorData: string;
            signature: string;
            userHandle?: string;
          };
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<VerifyWebAuthnAuthenticationVerificationData, void>({
        path: `/api/experience/verification/web-authn/authentication/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new BackupCode verification record with new backup codes generated. This verification record will be used to bind the backup codes to the user's profile.
     *
     * @tags Experience
     * @name GenerateBackupCodes
     * @summary Generate backup codes
     * @request POST:/api/experience/verification/backup-code/generate
     */
    generateBackupCodes: (params: RequestParams = {}) =>
      this.request<GenerateBackupCodesData, void>({
        path: `/api/experience/verification/backup-code/generate`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new BackupCode verification record and verify the provided backup code against the user's backup codes. The verification record will be marked as verified if the code is correct.
     *
     * @tags Experience
     * @name VerifyBackupCode
     * @summary Verify backup code
     * @request POST:/api/experience/verification/backup-code/verify
     */
    verifyBackupCode: (
      data: {
        /**
         * The backup code to verify.
         * @minLength 1
         */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VerifyBackupCodeData, void>({
        path: `/api/experience/verification/backup-code/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a NewPasswordIdentity verification record for the new user registration use. The verification record includes a unique user identifier and a password that can be used to create a new user account.
     *
     * @tags Experience
     * @name CreateNewPasswordIdentityVerification
     * @summary Create new password identity verification
     * @request POST:/api/experience/verification/new-password-identity
     */
    createNewPasswordIdentityVerification: (
      data: {
        /** The unique user identifier.  <br/> Currently, only `username` is accepted. For `email` or `phone` registration, a `CodeVerification` record must be created and used to verify the user's email or phone number identifier. */
        identifier: {
          /** @format "username" */
          type: string;
          /**
           * @format regex
           * @pattern /^[A-Z_a-z]\w*$/
           */
          value: string;
        };
        /** The new user password. (A password digest will be created and stored securely in the verification record.) */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreateNewPasswordIdentityVerificationData, void>({
        path: `/api/experience/verification/new-password-identity`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds user profile data to the current experience interaction. <br/>- For `Register`: The profile data provided before the identification request will be used to create a new user account. <br/>- For `SignIn` and `Register`: The profile data provided after the user is identified will be used to update the user's profile when the interaction is submitted. <br/>- `ForgotPassword`: Not supported.
     *
     * @tags Experience
     * @name AddUserProfile
     * @summary Add user profile
     * @request POST:/api/experience/profile
     */
    addUserProfile: (
      data: (
        | {
            /** @format "username" */
            type: string;
            /**
             * @format regex
             * @pattern /^[A-Z_a-z]\w*$/
             */
            value: string;
          }
        | {
            /** @format "password" */
            type: string;
            value: string;
          }
        | {
            /** @format "email" */
            type: string;
            verificationId: string;
          }
        | {
            /** @format "phone" */
            type: string;
            verificationId: string;
          }
        | {
            /** @format "social" */
            type: string;
            verificationId: string;
          }
      ) & {
        /** The type of profile data to add. `email`, `phone`, `username`, `password`, etc. */
        type?: any;
        /** The plain text value of the profile data. Only supported for profile data types that does not require verification, such as `username` and `password`. */
        value?: any;
        /** The ID of the verification record used to verify the profile data. Required for profile data types that require verification, such as `email`, `phone` and `social`. */
        verificationId?: any;
      },
      params: RequestParams = {},
    ) =>
      this.request<AddUserProfileData, void>({
        path: `/api/experience/profile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Reset the user's password. (`ForgotPassword` interaction only)
     *
     * @tags Experience
     * @name ResetUserPassword
     * @summary Reset user password
     * @request PUT:/api/experience/profile/password
     */
    resetUserPassword: (
      data: {
        /** The new password to update. The password must meet the password policy requirements and can not be the same as the current password. */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResetUserPasswordData, void>({
        path: `/api/experience/profile/password`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Skip MFA verification binding flow. If the MFA is enabled in the sign-in experience settings and marked as `UserControlled`, the user can skip the MFA verification binding flow by calling this API.
     *
     * @tags Experience
     * @name SkipMfaBindingFlow
     * @summary Skip MFA binding flow
     * @request POST:/api/experience/profile/mfa/mfa-skipped
     */
    skipMfaBindingFlow: (params: RequestParams = {}) =>
      this.request<SkipMfaBindingFlowData, void>({
        path: `/api/experience/profile/mfa/mfa-skipped`,
        method: "POST",
        ...params,
      }),

    /**
     * @description Bind new MFA verification to the user profile using the verificationId.
     *
     * @tags Experience
     * @name BindMfaVerification
     * @summary Bind MFA verification by verificationId
     * @request POST:/api/experience/profile/mfa
     */
    bindMfaVerification: (
      data: {
        /** The type of MFA. */
        type: "Totp" | "WebAuthn" | "BackupCode";
        /** The ID of the MFA verification record. */
        verificationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BindMfaVerificationData, void>({
        path: `/api/experience/profile/mfa`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Extract the email domain from the provided email address. Returns all the enabled SSO connectors that match the email domain.
     *
     * @tags Experience
     * @name GetEnabledSsoConnectors
     * @summary Get enabled SSO connectors by the given email's domain
     * @request GET:/api/experience/sso-connectors
     */
    getEnabledSsoConnectors: (
      query: {
        /**
         * The email address to find the enabled SSO connectors.
         * @format email
         */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEnabledSsoConnectorsData, void>({
        path: `/api/experience/sso-connectors`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  interaction = {
    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionUpdate
     * @request PUT:/api/interaction
     */
    interactionUpdate: (
      data: {
        event: "SignIn" | "Register" | "ForgotPassword";
        identifier?:
          | {
              /** @minLength 1 */
              username: string;
              /** @minLength 1 */
              password: string;
            }
          | {
              /** @minLength 1 */
              email: string;
              /** @minLength 1 */
              password: string;
            }
          | {
              /** @minLength 1 */
              phone: string;
              /** @minLength 1 */
              password: string;
            }
          | {
              /**
               * @format regex
               * @pattern /^\S+@\S+\.\S+$/
               */
              email: string;
              /** @minLength 1 */
              verificationCode: string;
            }
          | {
              /**
               * @format regex
               * @pattern /^\d+$/
               */
              phone: string;
              /** @minLength 1 */
              verificationCode: string;
            }
          | {
              connectorId: string;
              /** arbitrary */
              connectorData: object;
            }
          | {
              connectorId: string;
              email: string;
            }
          | {
              connectorId: string;
              phone: string;
            };
        profile?: {
          /**
           * @format regex
           * @pattern /^[A-Z_a-z]\w*$/
           */
          username?: string;
          /**
           * @format regex
           * @pattern /^\S+@\S+\.\S+$/
           */
          email?: string;
          /**
           * @format regex
           * @pattern /^\d+$/
           */
          phone?: string;
          connectorId?: string;
          password?: string;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<InteractionUpdateData, void>({
        path: `/api/interaction`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionDelete
     * @request DELETE:/api/interaction
     */
    interactionDelete: (params: RequestParams = {}) =>
      this.request<InteractionDeleteData, void>({
        path: `/api/interaction`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionEventUpdate
     * @request PUT:/api/interaction/event
     */
    interactionEventUpdate: (
      data: {
        event: "SignIn" | "Register" | "ForgotPassword";
      },
      params: RequestParams = {},
    ) =>
      this.request<InteractionEventUpdateData, void>({
        path: `/api/interaction/event`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionIdentifiersPartialUpdate
     * @request PATCH:/api/interaction/identifiers
     */
    interactionIdentifiersPartialUpdate: (
      data:
        | {
            /** @minLength 1 */
            username: string;
            /** @minLength 1 */
            password: string;
          }
        | {
            /** @minLength 1 */
            email: string;
            /** @minLength 1 */
            password: string;
          }
        | {
            /** @minLength 1 */
            phone: string;
            /** @minLength 1 */
            password: string;
          }
        | {
            /**
             * @format regex
             * @pattern /^\S+@\S+\.\S+$/
             */
            email: string;
            /** @minLength 1 */
            verificationCode: string;
          }
        | {
            /**
             * @format regex
             * @pattern /^\d+$/
             */
            phone: string;
            /** @minLength 1 */
            verificationCode: string;
          }
        | {
            connectorId: string;
            /** arbitrary */
            connectorData: object;
          }
        | {
            connectorId: string;
            email: string;
          }
        | {
            connectorId: string;
            phone: string;
          },
      params: RequestParams = {},
    ) =>
      this.request<InteractionIdentifiersPartialUpdateData, void>({
        path: `/api/interaction/identifiers`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionProfileUpdate
     * @request PUT:/api/interaction/profile
     */
    interactionProfileUpdate: (
      data: {
        /**
         * @format regex
         * @pattern /^[A-Z_a-z]\w*$/
         */
        username?: string;
        /**
         * @format regex
         * @pattern /^\S+@\S+\.\S+$/
         */
        email?: string;
        /**
         * @format regex
         * @pattern /^\d+$/
         */
        phone?: string;
        connectorId?: string;
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<InteractionProfileUpdateData, void>({
        path: `/api/interaction/profile`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionProfilePartialUpdate
     * @request PATCH:/api/interaction/profile
     */
    interactionProfilePartialUpdate: (
      data: {
        /**
         * @format regex
         * @pattern /^[A-Z_a-z]\w*$/
         */
        username?: string;
        /**
         * @format regex
         * @pattern /^\S+@\S+\.\S+$/
         */
        email?: string;
        /**
         * @format regex
         * @pattern /^\d+$/
         */
        phone?: string;
        connectorId?: string;
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<InteractionProfilePartialUpdateData, void>({
        path: `/api/interaction/profile`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionProfileDelete
     * @request DELETE:/api/interaction/profile
     */
    interactionProfileDelete: (params: RequestParams = {}) =>
      this.request<InteractionProfileDeleteData, void>({
        path: `/api/interaction/profile`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionSubmitCreate
     * @request POST:/api/interaction/submit
     */
    interactionSubmitCreate: (params: RequestParams = {}) =>
      this.request<InteractionSubmitCreateData, void>({
        path: `/api/interaction/submit`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionConsentCreate
     * @request POST:/api/interaction/consent
     */
    interactionConsentCreate: (
      data: {
        organizationIds?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InteractionConsentCreateData, void>({
        path: `/api/interaction/consent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionConsentList
     * @request GET:/api/interaction/consent
     */
    interactionConsentList: (params: RequestParams = {}) =>
      this.request<InteractionConsentListData, any>({
        path: `/api/interaction/consent`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionVerificationSocialAuthorizationUriCreate
     * @request POST:/api/interaction/verification/social-authorization-uri
     */
    interactionVerificationSocialAuthorizationUriCreate: (
      data: {
        connectorId: string;
        state: string;
        /** Validator function */
        redirectUri: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<InteractionVerificationSocialAuthorizationUriCreateData, void>({
        path: `/api/interaction/verification/social-authorization-uri`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionVerificationVerificationCodeCreate
     * @request POST:/api/interaction/verification/verification-code
     */
    interactionVerificationVerificationCodeCreate: (
      data:
        | {
            /**
             * @format regex
             * @pattern /^\S+@\S+\.\S+$/
             */
            email: string;
          }
        | {
            /**
             * @format regex
             * @pattern /^\d+$/
             */
            phone: string;
          },
      params: RequestParams = {},
    ) =>
      this.request<InteractionVerificationVerificationCodeCreateData, void>({
        path: `/api/interaction/verification/verification-code`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionVerificationTotpCreate
     * @request POST:/api/interaction/verification/totp
     */
    interactionVerificationTotpCreate: (params: RequestParams = {}) =>
      this.request<InteractionVerificationTotpCreateData, any>({
        path: `/api/interaction/verification/totp`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionVerificationWebauthnRegistrationCreate
     * @request POST:/api/interaction/verification/webauthn-registration
     */
    interactionVerificationWebauthnRegistrationCreate: (params: RequestParams = {}) =>
      this.request<InteractionVerificationWebauthnRegistrationCreateData, any>({
        path: `/api/interaction/verification/webauthn-registration`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionVerificationWebauthnAuthenticationCreate
     * @request POST:/api/interaction/verification/webauthn-authentication
     */
    interactionVerificationWebauthnAuthenticationCreate: (params: RequestParams = {}) =>
      this.request<InteractionVerificationWebauthnAuthenticationCreateData, void>({
        path: `/api/interaction/verification/webauthn-authentication`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionBindMfaCreate
     * @request POST:/api/interaction/bind-mfa
     */
    interactionBindMfaCreate: (
      data:
        | {
            /** @format "Totp" */
            type: string;
            code: string;
          }
        | {
            /** @format "WebAuthn" */
            type: string;
            id: string;
            rawId: string;
            response: {
              clientDataJSON: string;
              attestationObject: string;
              authenticatorData?: string;
              transports?: ("usb" | "nfc" | "ble" | "internal" | "cable" | "hybrid" | "smart-card")[];
              publicKeyAlgorithm?: number;
              publicKey?: string;
            };
            authenticatorAttachment?: "cross-platform" | "platform";
            clientExtensionResults: {
              appid?: boolean;
              crepProps?: {
                rk?: boolean;
              };
              hmacCreateSecret?: boolean;
            };
          }
        | {
            /** @format "BackupCode" */
            type: string;
          },
      params: RequestParams = {},
    ) =>
      this.request<InteractionBindMfaCreateData, void>({
        path: `/api/interaction/bind-mfa`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionMfaUpdate
     * @request PUT:/api/interaction/mfa
     */
    interactionMfaUpdate: (
      data:
        | {
            /** @format "Totp" */
            type: string;
            code: string;
          }
        | {
            /** @format "WebAuthn" */
            type: string;
            id: string;
            rawId: string;
            authenticatorAttachment?: "cross-platform" | "platform";
            clientExtensionResults: {
              appid?: boolean;
              crepProps?: {
                rk?: boolean;
              };
              hmacCreateSecret?: boolean;
            };
            response: {
              clientDataJSON: string;
              authenticatorData: string;
              signature: string;
              userHandle?: string;
            };
          }
        | {
            /** @format "BackupCode" */
            type: string;
            code: string;
          },
      params: RequestParams = {},
    ) =>
      this.request<InteractionMfaUpdateData, void>({
        path: `/api/interaction/mfa`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionMfaSkippedUpdate
     * @request PUT:/api/interaction/mfa-skipped
     */
    interactionMfaSkippedUpdate: (
      data: {
        /** @format true */
        mfaSkipped: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<InteractionMfaSkippedUpdateData, void>({
        path: `/api/interaction/mfa-skipped`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionSingleSignOnAuthorizationUrlCreate
     * @request POST:/api/interaction/single-sign-on/{connectorId}/authorization-url
     */
    interactionSingleSignOnAuthorizationUrlCreate: (
      connectorId: string,
      data: {
        /** @minLength 1 */
        state: string;
        /** Validator function */
        redirectUri: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<InteractionSingleSignOnAuthorizationUrlCreateData, void>({
        path: `/api/interaction/single-sign-on/${connectorId}/authorization-url`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionSingleSignOnAuthenticationCreate
     * @request POST:/api/interaction/single-sign-on/{connectorId}/authentication
     */
    interactionSingleSignOnAuthenticationCreate: (
      connectorId: string,
      data: Record<string, any>,
      params: RequestParams = {},
    ) =>
      this.request<InteractionSingleSignOnAuthenticationCreateData, void>({
        path: `/api/interaction/single-sign-on/${connectorId}/authentication`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionSingleSignOnRegistrationCreate
     * @request POST:/api/interaction/single-sign-on/{connectorId}/registration
     */
    interactionSingleSignOnRegistrationCreate: (connectorId: string, params: RequestParams = {}) =>
      this.request<InteractionSingleSignOnRegistrationCreateData, void>({
        path: `/api/interaction/single-sign-on/${connectorId}/registration`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interaction
     * @name InteractionSingleSignOnConnectorsList
     * @request GET:/api/interaction/single-sign-on/connectors
     */
    interactionSingleSignOnConnectorsList: (
      query: {
        /** @format email */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<InteractionSingleSignOnConnectorsListData, void>({
        path: `/api/interaction/single-sign-on/connectors`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
