1. Thoughts and Feedback
The best thing about taking a designated amount of time to plan with a partner is that is enhances modular thinking throughout the project. Recognizing that the sections of the page can behave as independent pieces & co-dependent pieces, or that certain components may be repeated at various points on the page, allows a more universal scope of the project and streamlines the creation and revision processes.  It also allows for a more efficient "outside-in" approach to the creation of the page, which I find extremely effective.

One downfall is that I have not mastered CSS well enough yet to foresee certain problems, and so plans created in the abstract need to be adjusted at times during the implementation. Modular thinking at the outset helps to limit these problems, or at least enhance the strength of the elements in general so problems which may arise are more isolated and less destructive when they occur.

Sass implementation was a bit odd in our project - we started the day off on Wednesday jumping into a Sass-based project, but then decided to step back and concentrate on a simple template and to re-incorporate Sass during the implementation stage. I realized that it would have been more effective to continue using Sass throughout, as it would not have hurt our template simplicity and we could have utilized Sass tools, ie, media-query properties, variables, to enhance the simplicity and ease the project implementation. As a result of our disjointed approach we didn't get to dig deeper into some of the key features we planned to take advantage of.

2.
## Specs
| Term  | Description | Implementation |
| ---------- | ----------- | -------------- |
|nesting | allows you to nest css selectors to enhance the logical flow of your stylesheet | nesting was our most utilized feature, by nesting child elements within the parent selector's properties, we streamlined the flow of our stylesheet, allowing for quick and easy targeting of elements and better logical flow |
|variables | declare a variable, add the variable to an element as a property | we set variables such as colors to establish a theme, width points   |
|media queries| allows for DRY incorporation of media queries nested within selector properties | Sass style media queries were incorporated throughout, nested within their targeted selector's properties, making them easy to manipulate for small and large dynamic changes. Coupled with variables set for width amounts, it became a simple and powerful tool |
|partials | allows you to modularize and interpolate with your stylesheet | followed suggested path file & import structure for like elements of the page to keep master stylesheet lean, while this objective was not met on Thursday, we met this objective with previous assignments this week|
|card (component)| allows for boilerplate formatting on card elements | we set certain properties to apply to all cards, ie padding/margin, content structure |


3. Today's project will be different in the sense that I will use Sass from the outset, and I would like to be more deliberate in my implementation of its features. From our workflow over the past two days I learned that wireframing, while seemingly simple, in the sense that you are breaking a page down into a basic template, is not simple in the sense that there must be a very holistic approach, understanding how your individual elements and components relate to each other, and how your stylesheet will or will not hold those pieces together. I would also like to reach back to skills achieved on Monday and Tuesday, where I felt I implemented Sass more effectively including incorporating interpolation and utilizing built in Sass functions, such as color mixing.
