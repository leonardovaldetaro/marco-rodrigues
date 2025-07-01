import Styles from './TestemunhoSection.module.scss';

// TestemunhosSection.tsx
type TestemunhosSectionProps = {
  children: React.ReactNode;
};

export default function TestemunhosSection({ children }: TestemunhosSectionProps) {
  return (
    <section className={Styles.testemunhosSection}>
      <div className={Styles.testemunhosSection__container}>
        {children}
      </div>
    </section>
  );
}