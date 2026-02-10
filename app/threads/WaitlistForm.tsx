'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setEmail('');
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`${styles.container} ${styles.centered}`}>
            <h2 className={styles.waitlistHeadline}>
                Join the waitlist. Get early access to Thread,
                <br />
                to your goals, faster.
            </h2>

            {submitStatus === 'success' ? (
                <div className={styles.successMessage}>
                    <p>✓ Thank you! Check your email for a message from Shubham.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.waitlistForm}>
                    <input
                        type="email"
                        placeholder="What is your email?"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.emailInput}
                        disabled={isSubmitting}
                    />
                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Joining...' : 'Get Early Access'}
                    </button>
                </form>
            )}

            {submitStatus === 'error' && (
                <p className={styles.errorMessage}>{errorMessage}</p>
            )}
        </div>
    );
}
