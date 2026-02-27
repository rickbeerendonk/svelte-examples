// European Union Public License version 1.2
// Copyright © 2026 Rick Beerendonk

import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(307, '/new-page');
}
