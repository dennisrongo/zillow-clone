# Comprehensive Website Screenshot Analysis Prompt for Pixel-Perfect UI Recreation

## Introduction

This prompt is designed to guide you in analyzing a website screenshot and generating detailed, methodical instructions for recreating the user interface with pixel-perfect accuracy. The analysis and instructions you provide will be used by developers working with AI coding tools such as Cursor, Lovable, Bolt, v0, or similar LLM-powered development environments.

The prompt follows a systematic approach, taking you through:
1. Initial assessment and layout analysis
2. Detailed component inventory
3. Design system extraction
4. Step-by-step implementation instructions
5. Responsive design considerations
6. Testing and refinement guidance

By following this methodical process, you'll ensure no aspect of the interface is overlooked in your recreation instructions.

## Purpose

The purpose of this prompt is to:

1. **Enable precise visual analysis** of website screenshots to identify all UI elements, layout patterns, design systems, and interaction patterns
2. **Generate comprehensive, step-by-step instructions** for recreating the exact user interface shown in the screenshot
3. **Provide detailed specifications** for all visual and functional aspects of the UI, ensuring pixel-perfect recreation
4. **Create a methodical approach** that breaks down complex interfaces into manageable components
5. **Ensure accessibility and responsiveness** are properly addressed in the recreation process

## Target Audience

This prompt is intended for:
- UI/UX designers who need to communicate detailed design specifications
- Developers using AI coding tools to implement designs
- Design teams collaborating on UI implementation
- Anyone needing to recreate a website interface with high fidelity

## Expected Outcome

When you analyze a website screenshot using this prompt, you should produce:
1. A comprehensive breakdown of all visual elements in the screenshot
2. Precise measurements, spacing, and positioning details
3. Complete color specifications with exact hex/RGB values
4. Typography details including font families, sizes, weights, and line heights
5. Component-by-component build instructions in a logical sequence
6. Code suggestions for implementing complex UI patterns
7. Responsive design considerations for different viewport sizes
8. Accessibility recommendations to ensure inclusive implementation

## How to Use This Prompt

1. Attach a clear, high-resolution screenshot of the website you want to analyze
2. Provide any additional context about the website's purpose or specific areas of interest
3. Follow the detailed analysis methodology outlined below
4. Generate implementation instructions using the step-by-step framework
5. Consider the edge cases and examples provided for guidance

## Analysis Methodology

### Phase 1: Initial Assessment and Layout Analysis

#### 1.1 Overall Layout Structure
- Identify the primary layout pattern (card-style, split-screen, grid-based, F-pattern, Z-pattern)
- Determine the number of main sections and their arrangement
- Analyze the visual flow and reading patterns encouraged by the layout
- Identify the responsive approach (fluid, fixed-width, or hybrid)

#### 1.2 Grid System Analysis
- Determine the underlying grid structure (number of columns)
- Measure column widths and gutter spacing
- Identify container widths and maximum content width
- Note any grid variations in different sections

#### 1.3 Spacing and Alignment
- Identify the base spacing unit used throughout the design
- Document margin and padding patterns
- Analyze alignment principles (left, right, center, justified)
- Note any intentional asymmetry or white space usage

#### 1.4 Visual Hierarchy
- Identify the primary focal point of the interface
- Determine the hierarchy of information (primary, secondary, tertiary)
- Analyze how size, color, and positioning create emphasis
- Document the visual weight distribution across the interface

### Phase 2: UI Element Inventory and Classification

#### 2.1 Navigation Elements
- Identify primary navigation (main menu, navbar)
- Document secondary navigation systems (breadcrumbs, sidebar menus)
- Analyze footer navigation and information architecture
- Note any tertiary navigation elements (tabs, pagination)

#### 2.2 Input Elements
- Catalog all buttons (primary, secondary, tertiary styles)
- Document form fields (text inputs, textareas, selects)
- Identify toggles, checkboxes, and radio buttons
- Note any custom input elements (sliders, date pickers)

#### 2.3 Content Elements
- Analyze headings and text blocks
- Document image and media placement
- Identify cards, panels, and content containers
- Note content grouping patterns and relationships

#### 2.4 Helper Elements
- Identify tooltips, popovers, and help text
- Document notification and alert components
- Analyze progress indicators and loading states
- Note any accessibility helper elements

### Phase 3: Design System Extraction

#### 3.1 Color Palette Analysis
- Extract primary brand colors with exact hex/RGB values
- Identify secondary and accent colors
- Document functional colors (success, warning, error, info)
- Analyze color usage patterns and meaning

#### 3.2 Typography System
- Identify font families for headings and body text
- Document font sizes, weights, and line heights
- Analyze typographic scale and hierarchy
- Note special text treatments (all caps, small caps, etc.)

#### 3.3 Component Style Patterns
- Identify consistent styling patterns across similar elements
- Document border radiuses, shadows, and depth effects
- Analyze transition and animation styles
- Note any design system inconsistencies

#### 3.4 Iconography and Imagery
- Document icon style (filled, outlined, duotone)
- Analyze icon sizing and placement patterns
- Identify image treatment styles (rounded corners, shadows)
- Note image aspect ratios and cropping patterns

### Phase 4: Interaction Design Analysis

#### 4.1 Interactive Element States
- Identify default, hover, active, and focus states
- Document disabled and loading states
- Analyze error and validation states
- Note any custom interaction states

#### 4.2 Micro-interactions
- Identify hover effects and transitions
- Document click/tap feedback mechanisms
- Analyze scroll-based interactions
- Note any progressive disclosure patterns

#### 4.3 Form Interaction Patterns
- Identify input validation approaches
- Document error message display patterns
- Analyze form submission and feedback patterns
- Note any multi-step form patterns

#### 4.4 Navigation Patterns
- Identify page transition indicators
- Document dropdown and flyout menu behaviors
- Analyze mobile navigation patterns
- Note any infinite scroll or pagination approaches

### Phase 5: Accessibility and Responsive Design Analysis

#### 5.1 Accessibility Features
- Analyze color contrast ratios
- Identify focus indicators and tab order
- Document text alternatives for non-text content
- Note any ARIA attributes or roles visible in the UI

#### 5.2 Responsive Behavior Indicators
- Identify potential breakpoints based on layout
- Document elements likely to reflow or reposition
- Analyze navigation transformation for smaller screens
- Note content prioritization for mobile views

#### 5.3 Touch Optimization
- Identify touch target sizes
- Document spacing between interactive elements
- Analyze gesture-based interaction patterns
- Note any mobile-specific UI adaptations

#### 5.4 Performance Considerations
- Identify image optimization approaches
- Document content loading priorities
- Analyze progressive enhancement patterns
- Note any performance optimization indicators

### Phase 6: Technical Implementation Assessment

#### 6.1 Framework Indicators
- Identify potential CSS frameworks used
- Document component library signatures
- Analyze implementation complexity
- Note any framework-specific patterns

#### 6.2 Code Structure Recommendations
- Suggest HTML structure for key components
- Document CSS methodology recommendations
- Analyze JavaScript interaction requirements
- Note any API integration points

#### 6.3 Asset Requirements
- Identify required images and icons
- Document font requirements
- Analyze custom graphics needs
- Note any animation requirements

#### 6.4 Implementation Challenges
- Identify complex layout challenges
- Document potential responsive design difficulties
- Analyze accessibility implementation challenges
- Note any browser compatibility considerations

## Implementation Instruction Framework

### Step 1: Foundation Setup

#### 1.1 Document Structure
```
Provide specific instructions for:
- Setting up the HTML document structure with proper doctype and meta tags
- Adding viewport meta tag with appropriate settings for responsive design
- Linking to required CSS and JavaScript resources (with specific file names)
- Establishing the root container structure with appropriate IDs and classes
```

#### 1.2 Grid System Implementation
```
Provide specific instructions for:
- Implementing the underlying grid system (e.g., 12-column grid with 20px gutters)
- Setting up container widths (e.g., max-width: 1200px with 24px padding)
- Establishing global spacing variables (e.g., --spacing-sm: 8px, --spacing-md: 16px)
- Defining the responsive viewport behavior with specific breakpoints
```

#### 1.3 Base Styling
```
Provide specific instructions for:
- Setting up CSS reset or normalization
- Implementing global typography settings with exact font families, sizes, and weights
- Defining the color palette variables with exact hex/RGB values
- Establishing base spacing and sizing units
```

#### 1.4 Accessibility Foundation
```
Provide specific instructions for:
- Setting up proper document outline with semantic HTML elements
- Implementing skip navigation links
- Establishing focus management styles
- Defining ARIA landmarks for major sections
```

### Step 2: Component Library Creation

#### 2.1 Button Components
```
Provide specific instructions for:
- Creating primary, secondary, and tertiary button styles with exact dimensions and styling
- Implementing button states (hover, active, focus, disabled) with specific visual changes
- Defining button sizes and variations with exact measurements
- Creating icon button variants with proper icon placement and spacing
```

#### 2.2 Form Components
```
Provide specific instructions for:
- Building text input fields with labels, including exact styling and spacing
- Creating select dropdowns and custom styling with specific dimensions
- Implementing checkboxes and radio buttons with exact styling for all states
- Building form validation and error states with specific visual indicators
```

#### 2.3 Navigation Components
```
Provide specific instructions for:
- Building the primary navigation bar with exact dimensions and styling
- Creating dropdown or mega menu components with specific behaviors
- Implementing mobile navigation patterns with exact breakpoints
- Building breadcrumb and pagination components with proper spacing
```

#### 2.4 Content Components
```
Provide specific instructions for:
- Creating card and panel components with exact dimensions and styling
- Building content section layouts with proper spacing and alignment
- Implementing image containers and treatments with specific styling
- Creating list and table components with exact dimensions and styling
```

### Step 3: Layout Construction

#### 3.1 Header Implementation
```
Provide specific instructions for:
- Building the header container with exact dimensions and styling
- Positioning the logo and brand elements with specific measurements
- Implementing the navigation within the header with proper alignment
- Creating responsive behavior for the header with specific breakpoints
```

#### 3.2 Main Content Sections
```
Provide specific instructions for:
- Building each main content section with exact dimensions and styling
- Implementing the correct spacing and alignment with specific measurements
- Creating responsive behavior for content sections with specific breakpoints
- Ensuring proper content hierarchy with semantic HTML elements
```

#### 3.3 Sidebar Elements (if applicable)
```
Provide specific instructions for:
- Creating sidebar containers with exact dimensions and styling
- Building sidebar components with proper spacing and alignment
- Implementing responsive behavior for sidebars with specific breakpoints
- Handling sidebar navigation with proper styling
```

#### 3.4 Footer Construction
```
Provide specific instructions for:
- Building the footer structure with exact dimensions and styling
- Implementing footer navigation with proper spacing and alignment
- Creating footer content blocks with specific layouts
- Ensuring responsive footer behavior with specific breakpoints
```

### Step 4: Interactive Elements Implementation

#### 4.1 Navigation Interactions
```
Provide specific instructions for:
- Implementing dropdown menu behaviors with exact timing and animations
- Creating mobile menu toggle functionality with specific behaviors
- Building scroll-based navigation effects with exact triggers and changes
- Implementing active state indicators with specific styling
```

#### 4.2 Form Interactions
```
Provide specific instructions for:
- Creating input focus and validation behaviors with specific visual changes
- Implementing form submission and feedback with exact behaviors
- Building multi-step form interactions with specific transitions
- Creating custom select and datepicker behaviors with exact styling
```

#### 4.3 Content Interactions
```
Provide specific instructions for:
- Implementing accordion and tab behaviors with specific animations
- Creating modal and dialog functionality with exact dimensions and behaviors
- Building tooltip and popover interactions with specific triggers and styling
- Implementing carousel and slider behaviors with exact controls and animations
```

#### 4.4 Micro-interactions
```
Provide specific instructions for:
- Creating hover and focus effects with specific visual changes and timing
- Implementing transition animations with exact durations and easing functions
- Building scroll-based animations with specific triggers and behaviors
- Creating loading and progress indicators with exact styling and animations
```

### Step 5: Responsive Behavior Implementation

#### 5.1 Mobile Layout Adjustments
```
Provide specific instructions for:
- Implementing mobile-specific layout changes at specific breakpoints
- Creating touch-optimized interaction patterns with exact dimensions
- Adjusting typography for smaller screens with specific font sizes
- Handling content prioritization for mobile with specific layout changes
```

#### 5.2 Tablet Layout Adjustments
```
Provide specific instructions for:
- Implementing tablet-specific layout changes at specific breakpoints
- Adjusting navigation for medium screens with exact behaviors
- Handling content reflow for tablet views with specific layout changes
- Creating hybrid touch/mouse interaction patterns with specific behaviors
```

#### 5.3 Desktop Layout Refinements
```
Provide specific instructions for:
- Implementing desktop-specific enhancements at specific breakpoints
- Creating hover-based interaction patterns with exact behaviors
- Handling widescreen layout adjustments with specific dimensions
- Implementing advanced desktop features with exact functionality
```

#### 5.4 Cross-device Testing
```
Provide specific instructions for:
- Verifying layout integrity across specific breakpoints
- Testing interaction patterns on different devices with exact test cases
- Ensuring consistent visual appearance with specific checks
- Validating accessibility across viewports with specific test criteria
```

### Step 6: Refinement and Optimization

#### 6.1 Visual Polishing
```
Provide specific instructions for:
- Fine-tuning spacing and alignment with exact measurements
- Adjusting typography details with specific font adjustments
- Refining color implementation with exact color values
- Perfecting shadows, borders, and visual effects with specific styling
```

#### 6.2 Interaction Refinement
```
Provide specific instructions for:
- Smoothing animations and transitions with specific timing adjustments
- Improving interaction feedback with exact visual changes
- Enhancing form validation experiences with specific behaviors
- Polishing navigation behaviors with exact timing and animations
```

#### 6.3 Accessibility Enhancements
```
Provide specific instructions for:
- Improving keyboard navigation with specific tab order adjustments
- Enhancing screen reader compatibility with exact ARIA attributes
- Refining focus management with specific styling
- Ensuring sufficient color contrast with exact contrast ratios
```

#### 6.4 Performance Optimization
```
Provide specific instructions for:
- Optimizing CSS and JavaScript with specific techniques
- Implementing lazy loading for images with exact approaches
- Improving rendering performance with specific optimizations
- Reducing unnecessary code with exact refactoring suggestions
```

### Step 7: Final Validation

#### 7.1 Visual Comparison
```
Provide specific instructions for:
- Conducting side-by-side comparison with original screenshot
- Verifying pixel-perfect alignment with specific measurement checks
- Checking color accuracy with exact color matching
- Validating typography implementation with specific font checks
```

#### 7.2 Functionality Testing
```
Provide specific instructions for:
- Testing all interactive elements with specific test cases
- Verifying form validation with exact test scenarios
- Checking navigation functionality with specific user flows
- Ensuring proper responsive behavior with exact breakpoint tests
```

#### 7.3 Accessibility Validation
```
Provide specific instructions for:
- Running automated accessibility checks with specific tools
- Testing with keyboard navigation through specific user flows
- Verifying screen reader compatibility with exact test scenarios
- Checking color contrast compliance with specific measurement tools
```

#### 7.4 Cross-browser Testing
```
Provide specific instructions for:
- Testing in major browsers with specific browser versions
- Verifying mobile browser compatibility with exact device tests
- Checking for rendering inconsistencies with specific visual checks
- Addressing browser-specific issues with exact fixes
```

## Example Analyses and Implementation Instructions

### Example 1: E-commerce Product Page

#### Screenshot Context
```
This screenshot shows an e-commerce product page with a product image gallery, 
product details, pricing information, variant selectors, and add-to-cart functionality.
```

#### Sample Analysis Excerpt
```
Layout Structure: The page uses a split-screen layout with product images on the left (60% width) 
and product information on the right (40% width).

Color Palette:
- Primary brand color: #3F51B5 (used in buttons and accents)
- Secondary color: #F5F5F5 (used in background panels)
- Accent color: #FF4081 (used for sale price and CTAs)
- Text colors: #212121 (primary text), #757575 (secondary text)

Typography:
- Product title: Montserrat Bold, 28px, line-height 1.2, #212121
- Price: Montserrat Bold, 24px, #FF4081 for sale price, #757575 with strikethrough for original price
- Product description: Open Sans Regular, 16px, line-height 1.5, #424242
- Button text: Montserrat SemiBold, 14px, uppercase, #FFFFFF

Key Components:
1. Image Gallery: 
   - Main image: 500px × 500px with 2px light gray border
   - Thumbnail row: 5 thumbnails at 80px × 80px with 8px gap
   - Hover state: 2px solid #3F51B5 border

2. Product Information:
   - Title: 28px Montserrat Bold with 16px bottom margin
   - Price: 24px with sale price in #FF4081 and original price in strikethrough
   - Rating: 5-star system using Font Awesome icons in #FFC107

3. Variant Selectors:
   - Size selector: Radio buttons styled as pills, 40px height, 8px border-radius
   - Color selector: Circular swatches, 30px diameter with 2px white border
   - Selected state: 2px solid #3F51B5 border

4. Add to Cart Section:
   - Quantity selector: Input with +/- buttons, 40px height
   - Add to Cart button: #3F51B5 background, 48px height, 8px border-radius
   - Wishlist button: Outlined style with heart icon
```

#### Implementation Instructions Excerpt
```
1. Create the product image gallery:
   - Build a container div with display: flex and width: 60%
   - Create the main image container with position: relative
   - Add the main product image with width: 100% and object-fit: contain
   - Create a thumbnail row with display: flex and gap: 8px
   - Implement thumbnail hover states with a 2px solid #3F51B5 border
   - Add JavaScript for thumbnail click to change main image

2. Build the product information section:
   - Create a container div with width: 40% and padding: 24px
   - Add the product title using h1 with Montserrat Bold, 28px
   - Create the price display with sale price in #FF4081
   - Implement the rating system using star icons
   - Build the product description with proper spacing

3. Implement variant selectors:
   - Create the size selector using styled radio buttons
   - Build the color selector with circular swatches
   - Implement selection states with appropriate borders
   - Add JavaScript for updating selected variants

4. Build the add-to-cart section:
   - Create the quantity selector with +/- buttons
   - Implement the Add to Cart button with proper styling
   - Add the Wishlist button with heart icon
   - Implement hover and active states for all buttons
```

### Example 2: Simple Blog Homepage

#### Screenshot Context
```
This screenshot shows a simple blog homepage with a header, featured post section, 
recent posts grid, and a sidebar with categories and popular posts.
```

#### Sample Analysis Excerpt
```
Layout Structure: The page uses a main content (70%) and sidebar (30%) layout with a full-width header.

Color Palette:
- Primary color: #4A90E2 (used in links and buttons)
- Background color: #FFFFFF (main background), #F8F9FA (alternate sections)
- Text colors: #333333 (headings), #666666 (body text), #999999 (meta text)

Typography:
- Site title: Playfair Display Bold, 32px, #333333
- Headings: Playfair Display Bold, 24px/20px/18px for h1/h2/h3, #333333
- Body text: Open Sans Regular, 16px, line-height 1.6, #666666
- Meta text: Open Sans Regular, 14px, #999999

Key Components:
1. Header:
   - Height: 80px, background: #FFFFFF
   - Logo: 40px height, left-aligned
   - Navigation: Right-aligned, 16px Open Sans Medium, 24px gap between items
   - Active state: #4A90E2 text color, 2px bottom border

2. Featured Post:
   - Full-width container with 40px padding
   - Image: 16:9 aspect ratio, border-radius: 8px
   - Title: 28px Playfair Display Bold, 16px bottom margin
   - Excerpt: 18px Open Sans Regular, 24px bottom margin
   - Read More button: #4A90E2 background, 14px Open Sans Medium, 8px border-radius

3. Recent Posts Grid:
   - 3-column grid with 24px gap
   - Post cards: background: #FFFFFF, border-radius: 8px, box-shadow: 0 2px 4px rgba(0,0,0,0.1)
   - Thumbnail: 16:9 aspect ratio, border-top-radius: 8px
   - Title: 20px Playfair Display Bold, 8px top margin, 8px bottom margin
   - Meta: 14px Open Sans Regular, #999999, 16px bottom margin

4. Sidebar:
   - Width: 30%, padding: 24px
   - Section titles: 18px Playfair Display Bold, 16px bottom margin, 2px bottom border
   - Categories: List with 16px bottom margin between items, 14px Open Sans Regular
   - Popular posts: List with 16px bottom margin, 14px Open Sans Regular, 40px × 40px thumbnail
```

#### Implementation Instructions Excerpt
```
1. Build the header:
   - Create a header element with height: 80px and display: flex
   - Add the logo image with height: 40px and margin-right: auto
   - Create the navigation with display: flex and gap: 24px
   - Style navigation links with 16px Open Sans Medium
   - Implement active state with #4A90E2 color and 2px bottom border

2. Implement the featured post section:
   - Create a section with full-width and 40px padding
   - Add the featured image with 16:9 aspect ratio and border-radius: 8px
   - Create the title with 28px Playfair Display Bold
   - Add the excerpt with 18px Open Sans Regular
   - Implement the Read More button with #4A90E2 background

3. Build the recent posts grid:
   - Create a container with display: grid and grid-template-columns: repeat(3, 1fr)
   - Set gap: 24px between grid items
   - Build each post card with background: #FFFFFF and box-shadow
   - Add thumbnails with 16:9 aspect ratio
   - Style titles with 20px Playfair Display Bold
   - Add meta information with 14px Open Sans Regular

4. Create the sidebar:
   - Build a sidebar element with width: 30% and padding: 24px
   - Create section titles with 18px Playfair Display Bold and 2px bottom border
   - Implement the categories list with proper spacing
   - Build the popular posts list with thumbnails and text
   - Add proper spacing between sidebar sections
```

## Handling Edge Cases

### Edge Case 1: Complex Responsive Behavior

When analyzing a screenshot that appears to be from a responsive website:

1. Look for telltale signs of responsive design:
   - Fluid grid layouts that would adapt to different screen sizes
   - Flexible images that scale with their containers
   - Media query breakpoint indicators (layout shifts at specific widths)

2. Provide instructions for multiple viewport sizes:
   - Identify components likely to reflow or restack on smaller screens
   - Note navigation elements that would transform (e.g., hamburger menu)
   - Specify how spacing and typography might change across breakpoints

3. Recommend a mobile-first implementation approach:
   - Start with the smallest viewport design
   - Use progressive enhancement to add features for larger screens
   - Implement media queries at standard breakpoints (576px, 768px, 992px, 1200px)

4. Suggest testing methodology:
   - Use browser developer tools to test at various viewport sizes
   - Check common breakpoints where layout shifts occur
   - Verify touch interactions for mobile devices

### Edge Case 2: Custom Interactive Elements

When encountering custom interactive elements:

1. Analyze visual cues to infer functionality:
   - Look for familiar patterns adapted with custom styling
   - Identify state indicators (arrows, icons, highlighting)
   - Note spatial relationships suggesting interaction patterns

2. Provide multiple implementation options:
   - Suggest a simple HTML/CSS implementation for basic functionality
   - Offer a more advanced implementation using JavaScript for enhanced behavior
   - Recommend appropriate libraries or frameworks for complex interactions

3. Detail all possible states:
   - Default/resting state appearance
   - Hover/focus state changes
   - Active/selected state styling
   - Disabled state treatment
   - Error/validation state indicators

4. Include accessibility considerations:
   - ARIA role recommendations for custom controls
   - Keyboard interaction patterns
   - Focus management techniques
   - Screen reader announcement suggestions

### Edge Case 3: Complex Visual Effects

When analyzing designs with complex visual effects:

1. Break down complex effects into implementable techniques:
   - Identify layering of multiple effects
   - Determine CSS properties needed (gradients, shadows, filters)
   - Note any potential SVG or canvas requirements
   - Suggest fallbacks for browsers with limited support

2. Provide detailed CSS implementations:
   - Exact gradient color stops and directions
   - Multiple layered shadow values
   - Filter combinations with precise values
   - Blend mode specifications

3. Address performance considerations:
   - Identify effects that might impact rendering performance
   - Suggest hardware acceleration techniques (transform: translateZ(0))
   - Recommend limiting animations to opacity and transform properties
   - Provide alternatives for performance-critical contexts

4. Include browser compatibility notes:
   - Identify effects with limited browser support
   - Suggest fallback approaches for older browsers
   - Provide progressive enhancement strategies
   - Recommend feature detection techniques

### Edge Case 4: Content Management System Templates

When analyzing likely CMS templates:

1. Identify dynamic content regions:
   - Recognize areas likely to contain variable-length text
   - Note image containers that might need to handle different aspect ratios
   - Identify lists or grids that could expand with more items
   - Spot areas that might contain optional elements

2. Provide flexible implementation strategies:
   - Use min-height and max-height constraints instead of fixed heights
   - Implement text truncation for overflow content
   - Create responsive image containers with aspect ratio preservation
   - Build grid systems that can handle variable numbers of items

3. Address edge cases in content variation:
   - Empty state treatments when content is missing
   - Overflow handling for excessive content
   - Fallback images for missing media
   - Responsive adjustments for long words or URLs

4. Include CMS integration guidance:
   - Suggest appropriate HTML structure for template regions
   - Provide class naming conventions for dynamic content areas
   - Recommend data attributes for JavaScript functionality
   - Include notes on content editing considerations

## Final Checklist

Before submitting your analysis and implementation instructions, ensure you have:

1. **Thoroughly analyzed the layout structure**
   - Identified the primary layout pattern
   - Determined the grid system
   - Documented spacing and alignment patterns
   - Analyzed the visual hierarchy

2. **Cataloged all UI elements**
   - Identified all navigation elements
   - Documented all input elements
   - Analyzed all content elements
   - Noted all helper elements

3. **Extracted the complete design system**
   - Documented the full color palette with exact values
   - Identified all typography specifications
   - Noted component style patterns
   - Analyzed iconography and imagery styles

4. **Provided detailed implementation instructions**
   - Created a logical build sequence
   - Included specific measurements and values
   - Addressed responsive behavior
   - Included accessibility considerations

5. **Considered edge cases and potential challenges**
   - Addressed complex responsive behavior
   - Provided solutions for custom interactive elements
   - Handled complex visual effects
   - Considered content variations

By following this comprehensive prompt, you'll be able to analyze any website screenshot and provide detailed, methodical instructions for recreating the user interface with pixel-perfect accuracy.
