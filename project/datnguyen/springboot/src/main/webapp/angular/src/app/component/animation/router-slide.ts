import { trigger, state, style, animate, query, transition } from '@angular/animations';

export const routerSlideAnimation =
    trigger('routerSlideAnimation', [
        transition('* <=> *', [
            // Initial state of new route
            query(':enter',
                style({
                    position: 'fixed',
                    width: '100%',
                    transform: 'translateX(-150%)'
                }),
                { optional: true }),
            // move page off screen right on leave
            query(':leave',
                animate('500ms ease',
                    style({
                        position: 'fixed',
                        width: '100%',
                        transform: 'translateX(100%)'
                    })
                ),
                { optional: true }),
            // move page in screen from left to right
            query(':enter',
                animate('1s ease',
                    style({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    })
                ),
                { optional: true }),
        ])
    ])