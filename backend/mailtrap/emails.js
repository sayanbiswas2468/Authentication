import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.Config.js";
export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]
    try {
        const responce = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
        console.log("Email send successfully", responce);
    } catch (error) {
        console.error(`Error sending verification`, error);
        throw new Error(`Error sending verification email ${error}`)
    }
}


export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
        const responce = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "d3c3cebd-2ead-45e8-9ebf-b514686a1759",
            template_variables: {
                name: "name",
                company_info_name: "Auth Company"
            }
        })

        console.log("Welcome email sent successfully", responce);
    }
    catch (error) {
        console.error(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error}`)

    }
}