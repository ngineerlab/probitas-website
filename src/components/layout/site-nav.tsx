import { RiCloseLine, RiHandHeartLine, RiMenuLine } from '@remixicon/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { accentSoftBg, accentText } from '@/lib/accent';
import { programIcons } from '@/lib/program-icons';
import { nav } from '@/lib/site-data';
import { cn } from '@/lib/utils';

const linkClass =
  'px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white';

function DesktopNav() {
  return (
    <div className="hidden items-center gap-1 lg:flex">
      <a href={nav.primary[0].href} className={linkClass}>
        {nav.primary[0].label}
      </a>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-open:bg-white/10 data-open:text-white data-open:hover:bg-white/10 data-open:hover:text-white data-open:focus:bg-white/10 data-open:focus:text-white data-popup-open:bg-white/10 data-popup-open:text-white data-popup-open:hover:bg-white/10 data-popup-open:hover:text-white">
              Programma&apos;s
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-80 gap-1">
                {nav.programs.map((program) => {
                  const Icon = programIcons[program.icon];
                  return (
                    <li key={program.title}>
                      <NavigationMenuLink
                        href={program.href}
                        className="items-start gap-3"
                      >
                        <span
                          className={cn(
                            'flex size-9 shrink-0 items-center justify-center rounded-full',
                            accentSoftBg[program.accent],
                          )}
                        >
                          <Icon
                            className={cn(
                              'size-4.5',
                              accentText[program.accent],
                            )}
                          />
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-heading text-sm font-medium">
                            {program.title}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {program.description}
                          </span>
                        </span>
                      </NavigationMenuLink>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {nav.primary.slice(1).map((item) => (
        <a key={item.label} href={item.href} className={linkClass}>
          {item.label}
        </a>
      ))}
    </div>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="absolute inset-x-0 top-full z-50 border-t border-white/10 bg-navy shadow-lg lg:hidden">
      <div className="flex flex-col gap-1 px-6 py-4">
        <a
          href={nav.primary[0].href}
          onClick={onClose}
          className="rounded-md px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
        >
          {nav.primary[0].label}
        </a>
        {nav.programs.map((program) => {
          const Icon = programIcons[program.icon];
          return (
            <a
              key={program.title}
              href={program.href}
              onClick={onClose}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              <span
                className={cn(
                  'flex size-7 shrink-0 items-center justify-center rounded-full',
                  accentSoftBg[program.accent],
                )}
              >
                <Icon className={cn('size-3.5', accentText[program.accent])} />
              </span>
              {program.title}
            </a>
          );
        })}
        {nav.primary.slice(1).map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="rounded-md px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            {item.label}
          </a>
        ))}
        <Button
          render={<a href="/contact" onClick={onClose} />}
          nativeButton={false}
          className="mt-2 gap-1.5 rounded-full"
        >
          Word Partner
          <RiHandHeartLine />
        </Button>
      </div>
    </div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DesktopNav />

      <div className="flex items-center gap-2">
        <Button
          render={<a href="/contact" />}
          nativeButton={false}
          className="hidden gap-1.5 rounded-full sm:inline-flex"
        >
          Word Partner
          <RiHandHeartLine />
        </Button>
        <button
          type="button"
          aria-label={open ? 'Sluit menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md text-white lg:hidden"
        >
          {open ? (
            <RiCloseLine className="size-6" />
          ) : (
            <RiMenuLine className="size-6" />
          )}
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
