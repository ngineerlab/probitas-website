import { RiSendPlaneLine } from '@remixicon/react';
import { type SubmitEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormProps {
  email: string;
}

export function ContactForm({ email }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const subject = String(data.get('subject') ?? 'Contact via website');
    const body = String(data.get('body') ?? '');
    const senderEmail = String(data.get('email') ?? '');

    const mailBody = `${body}\n\n—\n${name} (${senderEmail})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Naam</Label>
          <Input id="name" name="name" placeholder="Je naam" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="je@voorbeeld.com"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Onderwerp</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Waar gaat je bericht over?"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="body">Bericht</Label>
        <Textarea
          id="body"
          name="body"
          placeholder="Vertel ons meer..."
          rows={5}
          required
        />
      </div>
      <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
        Verstuur bericht
        <RiSendPlaneLine />
      </Button>
      {sent && (
        <p className="text-sm text-muted-foreground">
          Je e-mailprogramma opent met het bericht klaar om te versturen.
        </p>
      )}
    </form>
  );
}
