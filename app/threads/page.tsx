import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'Structure in Conversation | Thread',
    description: 'A quiet reflection on maintaining structure during live conversations—for anyone where missing a follow-up has a real cost.',
};

export default function ThreadsPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Header */}
            <header className={styles.siteHeader}>
                <div className={`${styles.container} ${styles.headerContent}`}>
                    <div className={styles.headerBrand}>
                        <h1 className={styles.brandName}>Thread</h1>
                        <p className={styles.brandSubtitle}>Bringing structure to conversations that wander.</p>
                    </div>
                    <div className={styles.comingSoon}>Coming Soon</div>
                </div>
            </header>

            {/* Section 1: Hero / Philosophy */}
            <section className={`${styles.hero} ${styles.section}`}>
                <div className={styles.container}>
                    <h1 className={styles.headline}>Structure breaks in live conversations.</h1>
                    <p className={styles.subtext}>Not because people don't know what to ask—but because live conversations are chaotic.</p>
                    <div className={styles.illustration}>
                        <Image
                            src="/hero_agenda_chaos.png"
                            alt="Clean agenda branching into tangled threads"
                            width={600}
                            height={400}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2: The Problem */}
            <section className={`${styles.problem} ${styles.section}`}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <p className={styles.bodyText}>The agenda gets lost somewhere between the second question and an unexpected tangent.</p>
                        <p className={styles.bodyText}>Follow-ups come too late—or never arrive.</p>
                        <p className={styles.bodyText}>Answers slip through, uncaptured and unvalidated.</p>
                    </div>
                </div>
            </section>

            {/* Section 3: The Core Problem */}
            {/* <section className={`${styles.roles} ${styles.section}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeadline}>Too many roles. One conversation.</h2>
                    <div className={styles.problemColumns}>
                        <div className={styles.problemCol}>
                            <p className={styles.bodyText}>In any given conversation, one person must:</p>
                            <ul className={styles.roleList}>
                                <li>Recall context from last time</li>
                                <li>Prepare the agenda</li>
                                <li>Listen actively</li>
                                <li>Ask follow-ups in the moment</li>
                                <li>Capture notes cleanly</li>
                            </ul>
                            <p className={styles.roleEmphasis}>Sound confident doing all of it</p>
                        </div>
                        <div className={`${styles.problemCol} ${styles.damageCol}`}>
                            <p className={`${styles.bodyText} ${styles.emphasis}`}>The damage isn't loud.</p>
                            <p className={styles.bodyText}>Credibility erodes slowly.</p>
                            <p className={styles.bodyText}>Extra meetings pile up to backtrack and clarify.</p>
                            <p className={styles.bodyText}>Wrong decisions get made on incomplete information.</p>
                            <p className={`${styles.bodyText} ${styles.emphasis}`}>Emotional exhaustion compounds.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Section 4: Who This Is For */}
            <section className={`${styles.personas} ${styles.section}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeadline}>When missing a follow-up has a real cost.</h2>
                    <div className={styles.personaGrid}>
                        <div className={styles.personaItem}>
                            <div className={styles.personaIcon}>
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M24 12C24 12 18 8 12 12M24 12C24 12 30 8 36 12M24 12V22M12 12V22C12 22 14 28 24 28C34 28 36 22 36 22V12M24 28V38M18 38H30"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className={styles.personaLabel}>Doctors</div>
                            <div className={styles.personaCost}>Wrong diagnosis</div>
                        </div>
                        <div className={styles.personaItem}>
                            <div className={styles.personaIcon}>
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="12" y="16" width="24" height="20" rx="2" stroke="currentColor"
                                        strokeWidth="1.5" />
                                    <path d="M18 16V14C18 13 19 12 20 12H28C29 12 30 13 30 14V16" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="24" y1="22" x2="24" y2="30" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className={styles.personaLabel}>Consultants</div>
                            <div className={styles.personaCost}>Wrong solution</div>
                        </div>
                        <div className={styles.personaItem}>
                            <div className={styles.personaIcon}>
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 24L22 28L30 20M24 38C18 38 12 34 12 28V16L24 10L36 16V28C36 34 30 38 24 38Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className={styles.personaLabel}>Solution Engineers</div>
                            <div className={styles.personaCost}>Delayed debugging</div>
                        </div>
                        <div className={styles.personaItem}>
                            <div className={styles.personaIcon}>
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="14" y="14" width="20" height="20" rx="2" stroke="currentColor"
                                        strokeWidth="1.5" />
                                    <line x1="20" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" />
                                    <line x1="20" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" />
                                    <line x1="20" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className={styles.personaLabel}>Product Managers</div>
                            <div className={styles.personaCost}>Missed alignment</div>
                        </div>
                        <div className={styles.personaItem}>
                            <div className={styles.personaIcon}>
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12L26 18H32L27 22L29 28L24 24L19 28L21 22L16 18H22L24 12Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M18 32C18 32 20 36 24 36C28 36 30 32 30 32" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className={styles.personaLabel}>Venture Capitalists</div>
                            <div className={styles.personaCost}>Missed signal</div>
                        </div>
                        <div className={styles.personaItem}>
                            <div className={styles.personaIcon}>
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="30" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12 32C12 28 14 26 18 26C20 26 21 27 24 27C27 27 28 26 30 26C34 26 36 28 36 32"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className={styles.personaLabel}>Interviewers</div>
                            <div className={styles.personaCost}>Inconsistent evaluation</div>
                        </div>
                    </div>
                    <p className={styles.closingText}>For anyone who jumps from meeting to meeting, where precision matters.</p>
                </div>
            </section>

            {/* Section 5: The Promise */}
            <section className={`${styles.promise} ${styles.section}`}>
                <div className={styles.container}>
                    <div className={`${styles.textContent} ${styles.centeredText}`}>
                        <p className={styles.bodyText}>What if the structure stayed intact?</p>
                        <p className={`${styles.bodyText} ${styles.spacingTop}`}>Agenda recalled at the right moment.</p>
                        <p className={styles.bodyText}>Follow-ups surfaced contextually.</p>
                        <p className={styles.bodyText}>Answers captured without breaking flow.</p>
                        <p className={`${styles.bodyText} ${styles.spacingTop} ${styles.emphasis}`}>Not automation. Load redistribution.</p>
                    </div>
                </div>
            </section>

            {/* Section 6: Closing */}
            <section className={`${styles.closing} ${styles.section}`}>
                <div className={`${styles.container} ${styles.centered}`}>
                    <p className={styles.closingStatement}>Good conversations shouldn't rely on memory alone.</p>
                    <footer className={styles.siteFooter}>
                        <p className={styles.companyName}>Thread</p>
                    </footer>
                </div>
            </section>
        </div>
    );
}
