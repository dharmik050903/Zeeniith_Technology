declare module '@emailjs/browser' {
  interface EmailJSResponse {
    status: number
    text: string
  }

  interface EmailJSParams {
    [key: string]: string | number | undefined
  }

  export function send(
    serviceId: string,
    templateId: string,
    templateParams: EmailJSParams,
    publicKey: string
  ): Promise<EmailJSResponse>

  export default {
    send: (
      serviceId: string,
      templateId: string,
      templateParams: EmailJSParams,
      publicKey: string
    ) => Promise<EmailJSResponse>
  }
}



