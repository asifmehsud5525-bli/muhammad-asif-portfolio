# Development Notes

## Project: Muhammad Asif — Personal Portfolio Website

---

# Development Progress

## Step 3.1 — Header / Navigation

### Status
**Completed and Tested**

### Objective

The objective of this step was to create a professional, semantic, responsive navigation header for the personal portfolio website.

The Header was developed as a complete component before moving to the next website section.

---

## 1. HTML Structure

Semantic HTML5 elements were used to create the navigation structure.

### Main elements used

- `<header>` — Defines the website header.
- `<nav>` — Defines the main navigation area.
- `<ul>` — Contains the navigation links.
- `<li>` — Represents individual navigation items.
- `<a>` — Provides navigation links.
- `<button>` — Used for the mobile navigation toggle.

### Navigation sections

The navigation currently contains:

- Home
- About
- Skills
- Projects
- Resume
- Contact

---

## 2. CSS Foundation

A reusable CSS foundation was created before styling the Header.

### CSS Variables

CSS custom properties were created for:

- Primary colors
- Background colors
- Text colors
- Border colors
- Typography
- Spacing
- Border radius
- Transitions
- Maximum container width

This allows the design system to remain consistent throughout the project.

---

## 3. Responsive Typography

The `clamp()` CSS function was introduced for fluid typography.

Example:

```css
font-size: clamp(1rem, 1.2vw, 1.125rem);

# Step 3.2 — Hero Section

## Status

**Completed and Tested**

## Objective

The Hero section was developed as the main introduction area of the personal portfolio website.

It introduces Muhammad Asif as a PHP & Laravel Full Stack Developer and provides visitors with clear actions to explore the portfolio and make contact.

---

## 1. Semantic HTML

Semantic HTML5 elements were used to create a meaningful Hero structure.

Implemented elements include:

- `<main>`
- `<section>`
- `<h1>`
- `<p>`
- `<a>`
- `<img>`

The Hero uses a single primary `<h1>` to establish the main heading of the page.

---

## 2. Hero Content

The Hero section contains:

- Developer specialization
- Developer name
- Professional introduction
- View My Work button
- Contact Me button
- LinkedIn profile link
- GitHub profile link
- Professional profile image
- Scroll indicator

---

## 3. CSS Grid

CSS Grid was used for the main Hero layout.

On desktop, the Hero uses a two-column layout:

```text
Hero Content       Hero Visual
     ↓                  ↓
Introduction       Profile Image
Buttons
Social Links

# Step 3.3 — About Section

## Status

**Completed and Tested**

## Objective

The About section was created to introduce Muhammad Asif as a PHP & Laravel Full Stack Developer and provide visitors with a concise overview of his development focus, goals and technical background.

---

## 1. Semantic HTML

Semantic HTML5 elements were used throughout the section.

Implemented elements include:

- `<section>`
- `<h2>`
- `<h3>`
- `<p>`
- `<article>`
- `<a>`

The section uses a meaningful heading hierarchy and structured content.

---

## 2. About Content

The section includes:

- Professional introduction
- PHP & Laravel development focus
- Full Stack development information
- Continuous learning focus
- Resume link
- GitHub profile link
- Three professional highlights

### Highlights

1. Full Stack Development
2. PHP & Laravel
3. Continuous Learning

---

## 3. CSS Grid

CSS Grid was used for the main About layout.

### Desktop

The content is arranged into two columns:

```text
About Content | About Highlights



# Step 3.4 — Skills Section

## Status

**Completed and Tested**

## Objective

The Skills section was created to showcase Muhammad Asif's core technical skills, development technologies, tools, and practical development knowledge in a clean and organized layout.

---

## 1. Semantic HTML

Semantic HTML5 elements were used throughout the section.

Implemented elements include:

* `<section>`
* `<div>`
* `<h2>`
* `<h3>`
* `<p>`
* `<span>`

The section uses a clear heading structure and reusable skill card elements.

---

## 2. Skills Categories

The section is organized into four main categories:

* Backend
* Frontend
* Tools & Workflow
* Additional

### Backend

Includes:

* PHP
* Laravel
* MySQL
* REST API

### Frontend

Includes:

* HTML5
* CSS3
* JavaScript
* Bootstrap

### Tools & Workflow

Includes:

* Git
* GitHub
* VS Code
* XAMPP

### Additional

Includes:

* Responsive Design
* CRUD
* Database Management
* API Integration

---

## 3. CSS Grid

CSS Grid was used for the main Skills layout.

### Desktop

The skill cards are arranged into two columns:

```text
Backend             | Frontend

Tools & Workflow    | Additional
```

### Tablet & Mobile

The layout changes to a single-column structure:

```text
Backend

Frontend

Tools & Workflow

Additional
```

This provides better readability and spacing on smaller screens.

---

## 4. Skill Cards

Each skill category is displayed inside a reusable skill card.

Each card contains:

* Category icon
* Category heading
* Short description
* Skill tags

The cards use consistent spacing, borders, rounded corners, and background colors based on the project's global CSS variables.

---

## 5. CSS Variables

The existing global CSS variables were reused for the Skills section.

Variables used include:

* `--color-primary`
* `--color-background`
* `--color-background-alt`
* `--color-text`
* `--color-text-muted`
* `--color-border`
* `--space-*`
* `--font-size-*`
* `--radius-*`
* `--transition-*`

No unnecessary duplicate design variables were introduced.

---

## 6. Hover Effects

Subtle hover effects were added to improve interaction.

Skill cards slightly move upward when hovered, while skill tags change their border and text color to the primary theme color.

The effects use the existing transition variables to maintain consistency with the rest of the portfolio.

---

## 7. Responsive Design

The Skills section was designed to work across different screen sizes.

Responsive adjustments were applied to:

* Grid layout
* Card spacing
* Card padding
* Section spacing
* Heading size
* Icon size
* Skill tag spacing

The desktop two-column layout changes to a single-column layout on smaller screens.

---

## 8. Testing

The Skills section was tested on all required screen sizes.

The following areas were checked:

* Desktop layout
* Tablet layout
* Mobile layout
* Card alignment
* Section spacing
* Typography
* Skill tags
* Hover effects
* Responsive behavior
* Horizontal overflow

The section is working correctly across the tested screen sizes.

---

# Step 4.1 — Projects Section

## Status

**Completed and Tested**

## Objective

The Projects section was created to showcase Muhammad Asif's practical development experience and provide visitors with an overview of the web applications and development projects he has built.

The section focuses on demonstrating practical experience with PHP, Laravel, MySQL, APIs, and frontend technologies.

---

## 1. Semantic HTML

Semantic HTML5 elements were used throughout the section.

Implemented elements include:

* `<section>`
* `<article>`
* `<div>`
* `<h2>`
* `<h3>`
* `<p>`
* `<span>`
* `<a>`

Each project is represented using a reusable `<article>` element to maintain a clear and structured document hierarchy.

---

## 2. Project Content

The section currently includes four projects.

### Projects

1. E-Commerce Website
2. Inventory Management System
3. PHP Blog Website
4. REST API Application

Each project includes:

* Project category
* Project title
* Project description
* Technologies used
* Project links
* Project visual placeholder

---

## 3. CSS Grid

CSS Grid was used for the main Projects layout.

### Desktop

The projects are arranged into two columns:

```text
Project 1 | Project 2

Project 3 | Project 4
```

### Tablet & Mobile

The layout changes to a single-column structure:

```text
Project 1

Project 2

Project 3

Project 4
```

This provides better readability and maintains appropriate spacing on smaller screens.

---

## 4. Project Cards

Each project is displayed inside a reusable project card.

Each card contains:

* Project visual area
* Project category
* Project title
* Project description
* Technology tags
* Live Demo link
* GitHub link where applicable

The reusable card structure makes it easy to add additional projects in the future.

---

## 5. Project Technologies

Technology tags were added to clearly identify the technologies used in each project.

Examples include:

* PHP
* Laravel
* MySQL
* HTML
* CSS
* JavaScript
* Livewire
* Sanctum
* REST API

The tags use the existing global CSS variables to maintain consistency with the Skills section.

---

## 6. Hover Effects

Subtle hover effects were added to the project cards and project links.

When a project card is hovered:

* The card moves slightly upward.
* The border changes to the primary color.
* A subtle shadow is displayed.

Project links also change color when hovered.

These effects provide visual feedback without making the section feel overly animated.

---

## 7. Responsive Design

The Projects section was designed to work across different screen sizes.

Responsive adjustments were applied to:

* Project grid
* Project card spacing
* Project image area
* Project content padding
* Project links
* Typography
* Project technology tags

The two-column desktop layout changes to a single-column layout on smaller screens.

---

## 8. Testing

The Projects section was tested on all required screen sizes.

The following areas were checked:

* Desktop layout
* Tablet layout
* Mobile layout
* Project card alignment
* Section spacing
* Project content
* Technology tags
* Project links
* Hover effects
* Responsive behavior
* Horizontal overflow

The section is working correctly across the tested screen sizes.


# Step 5.1 — Services Section

## Status

**Completed and Tested**

## Objective

The Services section was created to showcase the main web development services offered by Muhammad Asif as a PHP & Laravel Full Stack Developer.

The section provides visitors with a clear overview of the development solutions and technical services that can be provided.

---

## 1. Semantic HTML

Semantic HTML5 elements were used throughout the section.

Implemented elements include:

* `<section>`
* `<article>`
* `<div>`
* `<h2>`
* `<h3>`
* `<p>`
* `<ul>`
* `<li>`

Each service is represented using a reusable `<article>` element.

---

## 2. Services Content

The section includes six main services:

1. PHP Development
2. Laravel Development
3. Database Development
4. Responsive Web Design
5. REST API Development
6. Web Application Maintenance

Each service includes:

* Service icon
* Service title
* Short description
* List of included capabilities

---

## 3. CSS Grid

CSS Grid was used for the main Services layout.

### Desktop

The services are arranged into three columns:

```text
PHP Development       | Laravel Development    | Database Development

Responsive Design     | REST API Development   | Web Maintenance
```

### Tablet

The layout changes to two columns.

### Mobile

The layout changes to a single-column structure:

```text
PHP Development

Laravel Development

Database Development

Responsive Web Design

REST API Development

Web Application Maintenance
```

---

## 4. Service Cards

Each service is displayed inside a reusable service card.

Each card contains:

* Service icon
* Service heading
* Service description
* Service feature list

The cards use the existing global CSS variables for colors, spacing, borders, typography, and transitions.

---

## 5. Service Features

A feature list was added to each service card to provide additional information about the capabilities included within each service.

Check icons were used to visually separate individual features and improve readability.

---

## 6. Hover Effects

Subtle hover effects were added to the service cards.

When a card is hovered:

* The card moves slightly upward.
* The border changes to the primary color.
* A subtle shadow appears.

The effects use the existing transition variables.

---

## 7. Responsive Design

The Services section was designed for different screen sizes.

Responsive adjustments were applied to:

* Grid columns
* Card spacing
* Card padding
* Icon size
* Section spacing
* Typography
* Feature list spacing

The desktop three-column layout changes to two columns on tablets and one column on mobile devices.

---

## 8. Testing

The Services section was tested on all required screen sizes.

The following areas were checked:

* Desktop layout
* Tablet layout
* Mobile layout
* Service card alignment
* Section spacing
* Typography
* Feature lists
* Icons
* Hover effects
* Responsive behavior
* Horizontal overflow

The section is working correctly across the tested screen sizes.

---

# Step 6.1 — Experience & Education Section

## Status

**Completed and Tested**

## Objective

The Experience & Education section was created to present Muhammad Asif's development journey, practical experience, educational background, and continuous learning in a clear and organized layout.

The section combines professional development experience and education into a single responsive section.

---

## 1. Semantic HTML

Semantic HTML5 elements were used throughout the section.

Implemented elements include:

* `<section>`
* `<article>`
* `<div>`
* `<h2>`
* `<h3>`
* `<h4>`
* `<p>`
* `<span>`

Each experience and education entry is represented using a reusable `<article>` element.

---

## 2. Experience & Education Content

The section is divided into two main categories:

* Experience
* Education

### Experience

The Experience column includes:

1. PHP & Laravel Developer
2. Full Stack Web Development

The entries describe practical development work and experience with PHP, Laravel, MySQL, JavaScript, and database-driven applications.

### Education

The Education column includes:

1. Bachelor of Science
2. Web Development / Continuous Learning

The entries provide information about academic studies and ongoing development learning.

---

## 3. CSS Grid

CSS Grid was used for the main Journey layout.

### Desktop

The content is arranged into two columns:

```text id="1z0n8n"
Experience              | Education
------------------------|-----------------------
PHP & Laravel Developer | Bachelor of Science
Full Stack Development  | Continuous Learning
```

### Tablet & Mobile

The layout changes to a single-column structure:

```text id="kqg8vp"
Experience

PHP & Laravel Developer

Full Stack Development

Education

Bachelor of Science

Continuous Learning
```

This keeps the content readable and organized on smaller screens.

---

## 4. Journey Cards

Each experience and education entry is displayed inside a reusable journey card.

Each card contains:

* Category/type
* Title
* Date
* Organization
* Description

The reusable structure makes it easy to add additional experience or education entries in the future.

---

## 5. Icons & Visual Elements

Icons were added to visually identify the two main categories:

* Briefcase icon for Experience
* Graduation cap icon for Education

Date labels were also added to make the timeline information easy to scan.

---

## 6. Hover Effects

Subtle hover effects were added to the journey cards.

When a card is hovered:

* The card moves slightly upward.
* The border changes to the primary color.
* A subtle shadow appears.

The effects use the existing transition variables for consistency with the other portfolio sections.

---

## 7. Responsive Design

The Experience & Education section was designed to work across different screen sizes.

Responsive adjustments were applied to:

* Grid layout
* Card padding
* Card spacing
* Date positioning
* Typography
* Section spacing

The desktop two-column layout changes to a single-column layout on smaller screens.

---

## 8. Testing

The section was tested on all required screen sizes.

The following areas were checked:

* Desktop layout
* Tablet layout
* Mobile layout
* Experience cards
* Education cards
* Date labels
* Icons
* Typography
* Spacing
* Hover effects
* Responsive behavior
* Horizontal overflow

The section is working correctly across the tested screen sizes.

---
# Step 7.1 — Contact Section

## Status

**In Progress — Code Completed, Testing Pending**

## Objective

The Contact section was created to provide visitors with a clear and professional way to communicate with Muhammad Asif.

The section combines direct contact information, professional social profiles, and a contact form into a single responsive layout.

---

## 1. Semantic HTML

Semantic and accessible HTML elements were used throughout the section.

Implemented elements include:

* `<section>`
* `<div>`
* `<h2>`
* `<h3>`
* `<p>`
* `<span>`
* `<a>`
* `<form>`
* `<label>`
* `<input>`
* `<textarea>`
* `<button>`

The section uses `id="contact"` so it can be accessed directly from the main navigation.

---

## 2. Contact Content

The Contact section is divided into two main areas:

* Contact Information
* Contact Form

### Contact Information

The Contact Information area includes:

1. Email
2. LinkedIn
3. GitHub

Each contact item provides a clear label and description so visitors can quickly identify the available communication method.

### Email

The email contact uses a Gmail compose URL so visitors can open Gmail and start a new message addressed to:

`asifmehsud5525@gmail.com`

The Gmail link opens in a new browser tab.

### LinkedIn

The LinkedIn contact links directly to Muhammad Asif's professional LinkedIn profile.

### GitHub

The GitHub contact links directly to the GitHub profile where visitors can view development projects and source code.

---

## 3. Contact Form

A structured contact form was added to allow visitors to enter their project information.

The form includes:

* Name
* Email
* Subject
* Message
* Send Message button

All required fields use the HTML `required` attribute.

The email field uses:

`type="email"`

This provides basic browser-level email validation.

The form is currently implemented as a frontend interface. Backend email processing can be connected later using PHP or another server-side solution.

---

## 4. CSS Grid

CSS Grid was used for the main Contact layout.

### Desktop

The content is arranged into two columns:

```text
Contact Information     | Contact Form
------------------------|-----------------------
Let's Talk              | Name
Email                   | Email
LinkedIn                | Subject
GitHub                  | Message
                        | Send Message
```

### Tablet & Mobile

The layout changes to a single-column structure:

```text
Contact Information

Email
LinkedIn
GitHub

Contact Form

Name
Email
Subject
Message
Send Message
```

This keeps the contact information and form easy to read and use on smaller screens.

---

## 5. Contact Cards

Each contact method is displayed inside a reusable contact item.

Each item contains:

* Icon
* Contact label
* Contact value
* Interactive link

The reusable structure makes it easy to add additional contact methods in the future.

---

## 6. Form Styling

The contact form was styled using the existing Decodelab design system.

The form includes:

* Consistent input spacing
* Border styling
* Rounded corners
* Placeholder text
* Focus states
* Responsive padding
* Primary action button

The input and textarea focus states use the existing primary color to maintain visual consistency with the rest of the portfolio.

---

## 7. Icons & Visual Elements

Icons were added to visually identify the available contact methods:

* Email icon for Email
* LinkedIn identifier for LinkedIn
* Code identifier for GitHub

The icons use the existing portfolio color system and are contained inside small rounded icon areas.

---

## 8. Hover Effects

Subtle hover effects were added to the contact items.

When a contact item is hovered:

* The item moves slightly upward.
* The border changes to the primary color.
* A subtle shadow appears.

The effects use the existing transition variables for consistency with the other portfolio sections.

---

## 9. Design System Variables

The Contact section follows the existing Decodelab CSS variable system.

The section uses existing variables including:

* `--color-primary`
* `--color-primary-dark`
* `--color-background`
* `--color-background-alt`
* `--color-text`
* `--color-text-muted`
* `--color-border`
* `--font-family`
* `--font-size-*`
* `--space-*`
* `--radius-*`
* `--transition-*`

No new color, spacing, typography, or layout variables were introduced.

This keeps the Contact section visually consistent with the previously completed portfolio sections.

---

## 10. Responsive Design

The Contact section was designed to work across different screen sizes.

Responsive adjustments were applied to:

* Grid layout
* Contact card spacing
* Form padding
* Input sizing
* Icon sizing
* Typography
* Section spacing
* Button width

The desktop two-column layout changes to a single-column layout on smaller screens.

On mobile devices, the Send Message button becomes full width to improve usability.

---

## 11. Accessibility

Basic accessibility practices were implemented throughout the Contact section.

These include:

* Proper `<label>` elements for form controls
* Unique `id` attributes for form fields
* Appropriate input types
* Required field validation
* Descriptive link content
* Secure external links using `rel="noopener noreferrer"`
* Keyboard-accessible form controls

These practices improve usability and make the section easier to navigate.

---

## 12. Navigation Integration

The Contact section is connected to the main navigation using:

```html
<a href="#contact">Contact</a>
```

The section uses:

```html
<section id="contact">
```

This allows visitors to click **Contact** in the navbar and smoothly navigate to the Contact section according to the existing navigation behavior.

---

## 13. Testing

The Contact section will be tested on all required screen sizes.

The following areas will be checked:

* Desktop layout
* Tablet layout
* Mobile layout
* Contact cards
* Email link
* LinkedIn link
* GitHub link
* Contact form
* Form validation
* Input focus states
* Textarea behavior
* Send Message button
* Hover effects
* Typography
* Spacing
* Responsive behavior
* Horizontal overflow
* Navbar Contact link

The section will be marked **Completed and Tested** after all required screen sizes and interactions have been verified.

Step 7.2 — Footer Section
Status

In Progress — Code Completed, Testing Pending

Objective

The Footer section was created to provide visitors with important navigation links, professional profile links, copyright information, and a clear closing area for the portfolio website.

The footer follows the existing Decodelab design system and maintains visual consistency with the other portfolio sections.

1. Semantic HTML

Semantic HTML was used to create an accessible and meaningful footer structure.

Implemented elements include:

<footer>
<div>
<nav>
<h2>
<h3>
<p>
<a>
<ul>
<li>

The main footer content is contained inside the <footer> element to clearly identify it as the closing section of the webpage.

2. Footer Content

The Footer section is divided into multiple areas:

Brand / Introduction
Quick Navigation
Professional Links
Copyright Information
Brand / Introduction

The footer includes the portfolio owner's name:

Muhammad Asif

A short description is also included to provide visitors with a final overview of the professional portfolio.

The content reinforces the website's purpose as a portfolio for a PHP & Laravel Full Stack Developer.

Quick Navigation

The Quick Navigation area provides links to important sections of the portfolio.

These may include:

Home
About
Skills
Projects
Contact

The navigation links use section IDs to allow visitors to quickly move between different parts of the website.

Professional Links

Professional profile links are included for external platforms such as:

LinkedIn
GitHub

These links allow visitors to explore the developer's professional profile and development projects.

3. Footer Navigation

The footer includes a secondary navigation system for easier website navigation.

Example structure:

Quick Links


Home
About
Skills
Projects
Contact

The navigation provides an alternative way to access the main portfolio sections without returning to the top of the page.

The existing navigation behavior is maintained.

4. Social & Professional Links

Professional links are displayed using reusable link elements.

Each link provides access to the corresponding external profile.

The footer may include:

LinkedIn
GitHub

External links open according to the existing project behavior and use appropriate security attributes where required.

For external links opened in a new tab, rel="noopener noreferrer" is used.

5. CSS Layout

CSS Flexbox and/or Grid are used to organize the footer content while maintaining the existing project requirements.

Desktop

The footer content is arranged horizontally into multiple areas.

Brand / Introduction | Quick Links | Professional Links

This creates a balanced and organized footer layout on larger screens.

Tablet & Mobile

On smaller screen sizes, the footer layout changes to a more compact structure.

Brand / Introduction


Quick Links


Professional Links


Copyright

The content remains readable and avoids unnecessary horizontal scrolling.

6. Footer Styling

The Footer section follows the existing portfolio design system.

The styling includes:

Background color
Proper spacing
Typography hierarchy
Link styling
Borders where required
Rounded elements where appropriate
Consistent alignment
Responsive spacing

The footer uses the same visual language as the other portfolio sections to create a consistent overall design.

7. Hover Effects

Subtle hover effects are applied to interactive footer links.

When a navigation or social link is hovered:

The link changes to the primary color.
A smooth transition is applied.
The interaction provides clear visual feedback.

The existing transition variables are used to maintain consistency with the rest of the portfolio.

8. Design System Variables

The Footer section follows the existing Decodelab CSS variable system.

Existing variables are reused, including:

--color-primary
--color-primary-dark
--color-background
--color-background-alt
--color-text
--color-text-muted
--color-border
--font-family
--font-size-*
--space-*
--radius-*
--transition-*

No unnecessary new design variables were introduced.

This ensures that the Footer remains visually consistent with the previously completed sections.

9. Responsive Design

The Footer section was designed to work across different screen sizes.

Responsive adjustments were applied to:

Footer layout
Column structure
Navigation spacing
Link spacing
Typography
Padding
Alignment
Social links
Copyright text

On desktop screens, the footer uses a multi-column layout.

On tablet and mobile screens, the layout changes to a single-column or compact stacked structure.

This ensures that the footer remains easy to read and interact with on smaller devices.

10. Accessibility

Basic accessibility practices were implemented throughout the Footer section.

These include:

Semantic <footer> element
Semantic navigation structure
Descriptive link text
Keyboard-accessible links
Clear visual focus states
Proper heading hierarchy
Accessible navigation links
Secure external links using rel="noopener noreferrer" where applicable

These practices improve navigation and usability for all visitors.

11. Navigation Integration

The Footer navigation is connected to the existing portfolio sections using their corresponding IDs.

Example:

<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

These links allow visitors to navigate directly to the required sections from the bottom of the webpage.

The Footer does not introduce a separate navigation system that conflicts with the main navbar.

12. Copyright Information

A copyright notice was added to the bottom of the Footer.

The copyright area identifies the portfolio owner and provides a clear closing statement for the website.

Example:

© 2026 Muhammad Asif. All Rights Reserved.

The copyright text is styled using the existing muted text color and typography system.

13. Back-to-Top Navigation

A Back-to-Top link/button may be included to allow visitors to quickly return to the beginning of the portfolio.

Example:

<a href="#home">Back to Top</a>

The link uses the existing #home section ID and follows the project's current navigation behavior.

If implemented, the control remains keyboard accessible and provides clear visual feedback.

14. Visual Consistency

The Footer maintains the same design language used throughout the portfolio.

Consistency was maintained in:

Colors
Typography
Spacing
Border styles
Border radius
Transitions
Link behavior
Responsive layout

The Footer acts as a natural visual ending to the portfolio rather than appearing as a completely separate design element.

15. Testing

The Footer section will be tested on all required screen sizes.

The following areas will be checked:

Desktop layout
Tablet layout
Mobile layout
Footer navigation
Home link
About link
Skills link
Projects link
Contact link
LinkedIn link
GitHub link
Back-to-Top link
Copyright information
Hover effects
Focus states
Typography
Spacing
Alignment
Responsive behavior
Horizontal overflow
External links
Keyboard navigation

The section will be marked Completed and Tested after all required screen sizes and interactions have been verified.