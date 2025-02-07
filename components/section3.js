import React from 'react';
import {
  LandingProductTourSection,
  LandingProductTourList,
  LandingProductTourTrigger,
  LandingProductTourContent,
} from '@/components/landing/LandingProductTour';
import { VideoPlayer } from '@/components/shared/VideoPlayer';

export default function Section3() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(LandingProductTourSection, {
      titleComponent: React.createElement(
        'h2',
        { className: 'text-5xl font-semibold leading-tight' },
        'Superb garden designs.',
        React.createElement('br', null),
        'Created in minutes.'
      ),
      descriptionComponent: React.createElement(
        'div',
        { className: 'flex flex-col max-w-xl' },
        React.createElement(
          'p',
          { className: 'mt-4 md:text-xl' },
          'Gnomie is an intuitive garden design tool that makes your outdoor space look beautiful.'
        ),
        React.createElement(
          'p',
          { className: 'mt-4 md:text-xl opacity-50' },
          'It automatically suggests plants, flowers, and landscaping features based on your region\'s climate and soil conditions.'
        )
      ),
      defaultValue: 'feature-1',
    },
    React.createElement(
      LandingProductTourList,
      null,
      React.createElement(
        LandingProductTourTrigger,
        { value: 'feature-1' },
        React.createElement(
          'p',
          { className: 'text-xl font-bold' },
          'Automatic plant suggestions'
        ),
        React.createElement(
          'p',
          null,
          'Make your garden redesigns easier to execute while ensuring all plants thrive in your environment.'
        )
      ),
      React.createElement(
        LandingProductTourTrigger,
        { value: 'feature-2' },
        React.createElement(
          'p',
          { className: 'text-xl font-bold' },
          'Region-specific recommendations'
        ),
        React.createElement(
          'p',
          null,
          'Gnomie automatically recommends plants and features that are perfect for your local climate.'
        )
      ),
      React.createElement(
        LandingProductTourTrigger,
        { value: 'feature-3' },
        React.createElement(
          'p',
          { className: 'text-xl font-bold' },
          'Manual customization'
        ),
        React.createElement(
          'p',
          null,
          'You can also manually include/exclude specific plants and features.'
        )
      ),
      React.createElement(
        LandingProductTourTrigger,
        { value: 'feature-4' },
        React.createElement(
          'p',
          { className: 'text-xl font-bold' },
          'Easy editing'
        ),
        React.createElement(
          'p',
          null,
          'Simply drag and drop elements onto your garden design. All the heavy lifting is done automatically, requiring no manual work.'
        )
      )
    ),
    React.createElement(
      LandingProductTourContent,
      { value: 'feature-1' },
      React.createElement(VideoPlayer, {
        className: 'w-full rounded-md',
        src: 'https://cache.shipixen.com/features/11-pricing-page-builder.mp4',
        autoPlay: true,
        controls: false,
        loop: true,
      })
    ),
    React.createElement(
      LandingProductTourContent,
      { value: 'feature-2' },
      React.createElement(VideoPlayer, {
        className: 'w-full rounded-md',
        src: 'https://cache.shipixen.com/features/21-run-locally.mp4',
        autoPlay: true,
        controls: false,
        loop: true,
      })
    ),
    React.createElement(
      LandingProductTourContent,
      { value: 'feature-3' },
      React.createElement(VideoPlayer, {
        className: 'w-full rounded-md',
        src: 'https://cache.shipixen.com/features/22-landing-page-components.mp4',
        autoPlay: true,
        controls: false,
        loop: true,
      })
    ),
    React.createElement(
      LandingProductTourContent,
      { value: 'feature-4' },
      React.createElement(VideoPlayer, {
        className: 'w-full rounded-md',
        src: 'https://cache.shipixen.com/features/20-mobile-optimized.mp4',
        autoPlay: true,
        controls: false,
        loop: true,
      })
    )
  )
);
}
