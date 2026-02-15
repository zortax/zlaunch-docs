import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Rocket } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Rocket className="size-5" />
          zlaunch
        </>
      ),
    },
    githubUrl: 'https://github.com/zortax/zlaunch',
  };
}
