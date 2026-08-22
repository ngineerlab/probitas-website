import {
  RiArrowRightLine,
  RiComputerLine,
  RiSeedlingLine,
  RiTeamLine,
} from '@remixicon/react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { type Accent, accentGradient, accentText } from '@/lib/accent';
import { cn } from '@/lib/utils';

const icons = {
  RiComputerLine,
  RiSeedlingLine,
  RiTeamLine,
} as const;

interface ProgramCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
  accent: Accent;
  href: string;
}

export function ProgramCard({
  title,
  description,
  icon,
  accent,
  href,
}: ProgramCardProps) {
  const Icon = icons[icon];

  return (
    <Card className="p-0 transition-shadow hover:shadow-md">
      <CardHeader className="p-0">
        <div
          className={cn(
            'relative flex h-28 items-end justify-center bg-linear-to-br',
            accentGradient[accent],
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
          <div className="relative -mb-8 flex size-16 items-center justify-center rounded-full border-4 border-card bg-white shadow-sm">
            <Icon className={cn('size-7', accentText[accent])} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="items-center gap-2 pt-8 pb-2 text-center">
        <CardTitle
          className={cn(
            'font-heading text-lg tracking-wide uppercase',
            accentText[accent],
          )}
        >
          {title}
        </CardTitle>
        <CardDescription className="text-balance">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center pt-2 pb-6">
        <Button
          variant="outline"
          size="sm"
          className={cn('rounded-full', accentText[accent])}
          render={<a href={href} />}
          nativeButton={false}
        >
          Meer info
          <RiArrowRightLine />
        </Button>
      </CardFooter>
    </Card>
  );
}
