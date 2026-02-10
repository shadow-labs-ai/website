import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Hardcoded API Key for production environment where env vars are not available
        const apiKey = 're_WhVmLSqA_AmdyiCRqUbrUB7vGjzjVpVLy';

        const { email } = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // Here we'll send two emails:
        // 1. Welcome email to the user from founder
        // 2. Notification to founder with the new signup

        try {
            // Send welcome email from founder
            const welcomeEmailResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    from: 'Shubham from Shadow Labs <shubham@shadowlabs.ai>',
                    to: email,
                    subject: 'Welcome to Thread - A note from the founder',
                    html: `
                        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                            <h2 style="color: #1a1a1a; font-weight: 400; font-size: 24px; margin-bottom: 20px;">
                                Thank you for your interest in Thread
                            </h2>
                            
                            <p style="line-height: 1.6; margin-bottom: 16px; font-size: 16px;">
                                Hi there,
                            </p>
                            
                            <p style="line-height: 1.6; margin-bottom: 16px; font-size: 16px;">
                                I'm Shubham, founder of Shadow Labs. Thank you for signing up for early access to Thread.
                            </p>
                            
                            <p style="line-height: 1.6; margin-bottom: 16px; font-size: 16px;">
                                We're building Thread to bring structure to conversations that matter—for anyone where missing a follow-up has a real cost.
                            </p>
                            
                            <p style="line-height: 1.6; margin-bottom: 16px; font-size: 16px;">
                                I'd love to learn more about you:
                            </p>
                            
                            <ul style="line-height: 1.8; margin-bottom: 20px; font-size: 16px; padding-left: 20px;">
                                <li>How did you get to know about us?</li>
                                <li>What value are you looking to gain from Thread?</li>
                            </ul>
                            
                            <p style="line-height: 1.6; margin-bottom: 16px; font-size: 16px;">
                                Feel free to reply to this email directly—I read every response.
                            </p>
                            
                            <p style="line-height: 1.6; margin-bottom: 8px; font-size: 16px;">
                                Best,<br/>
                                Shubham
                            </p>
                            
                            <p style="line-height: 1.6; margin-top: 30px; font-size: 14px; color: #666; border-top: 1px solid #eee; padding-top: 20px;">
                                Shadow Labs<br/>
                                <a href="https://shadowlabs.ai" style="color: #666; text-decoration: none;">shadowlabs.ai</a>
                            </p>
                        </div>
                    `
                })
            });

            if (!welcomeEmailResponse.ok) {
                const errorData = await welcomeEmailResponse.json();
                console.error('Resend API error (Welcome Email):', errorData);
                // Return specific error message from Resend for easier debugging
                return NextResponse.json(
                    { error: `Email Error: ${errorData.message || 'Unknown error'}` },
                    { status: 500 }
                );
            }

            // Send notification to founder
            const notificationResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    from: 'Thread Waitlist <notifications@shadowlabs.ai>',
                    to: 'shubham@shadowlabs.ai',
                    subject: `New Thread Waitlist Signup: ${email}`,
                    html: `
                        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 20px;">
                            <h3>New waitlist signup</h3>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                        </div>
                    `
                })
            });

            if (!notificationResponse.ok) {
                // We log this but don't fail the user request if the founder notification fails, 
                // as long as the user got their welcome email.
                const errorData = await notificationResponse.json();
                console.error('Resend API error (Notification):', errorData);
            }

            return NextResponse.json({
                success: true,
                message: 'Successfully joined the waitlist!'
            });

        } catch (emailError: any) {
            console.error('Email sending error:', emailError);
            return NextResponse.json(
                { error: `Failed to send email: ${emailError.message}` },
                { status: 500 }
            );
        }

    } catch (error: any) {
        console.error('Waitlist API error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
