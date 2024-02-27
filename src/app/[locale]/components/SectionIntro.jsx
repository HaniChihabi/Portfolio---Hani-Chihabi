import clsx from 'clsx'

import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'

export function SectionIntro({
  title,
  eyebrow,
  children,
  size = 'default', // New size prop with a default value

  smaller = false,
  invert = false,
  ...props
}) {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  'mb-6 block font-display text-base font-semibold',
                  invert ? 'text-white' : 'text-neutral-950',
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              'block font-bold tracking-tight items-center align-middle [text-wrap:balance]',
              smaller
                ? 'text-2xl font-semibold'
                : 'text-4xl font-medium sm:text-3xl',
              invert ? 'text-white' : 'text-neutral-950',
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              'mt-6 text-xl',
              invert ? 'text-neutral-300' : 'text-neutral-600',
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  )
}
