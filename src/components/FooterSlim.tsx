import { useRouter } from 'next/navigation';

export function FooterSlim() {
  const router = useRouter();

  return (
    <footer className="bg-background border-t border-border py-3">
      <div className="container mx-auto px-4">
        <div className="text-center text-xs text-muted-foreground">
          © ClaimEase 2025 |{' '}
          <button onClick={() => router.push('/privacy')} className="text-primary hover:text-primary/80 transition-colors">
            Privacy
          </button>{' '}
          |{' '}
          <button onClick={() => router.push('/terms')} className="text-primary hover:text-primary/80 transition-colors">
            Terms
          </button>
        </div>
      </div>
    </footer>
  );
}