module.exports = {
  title: 'Accordion',
  type: 'object',
  properties: {
    items: {
      type: 'array',
      description:
        'All of the items in the accordion. Each item should contain a header and a content.',
      items: {
        type: 'object',
        properties: {
          trigger: {
            type: ['string', 'object', 'array'],
            description: 'Trigger content of an item.',
            default: 'Toggle Accordion',
          },
          content: {
            type: ['string', 'object', 'array'],
            description: 'Expandable content of an item.',
          },
          open: {
            type: 'boolean',
            description: 'Automatically expand an item on page load.',
            default: false,
            enum: [true, false],
          },
          inactive: {
            type: 'boolean',
            description:
              'Display item trigger as an inactive element. Item content will be collapsed and the toggle icon hidden.',
            default: false,
          },
          uuid: {
            type: 'string',
            description:
              'Unique ID for an item, randomly generated if not provided.',
          },
          open_label: {
            type: 'string',
            description:
              'Accessible label for the open trigger to expand an item.',
            default: 'Open Accordion',
          },
          close_label: {
            type: 'string',
            description:
              'Accessible label for the close trigger to collapse an item.',
            default: 'Close Accordion',
          },
          trigger_spacing: {
            type: 'string',
            hidden: true,
            description:
              'Overrides the default trigger spacing (by default, inherited from the parent bolt-accordion)',
            $ref: '#/definitions/spacing',
          },
          content_spacing: {
            type: 'string',
            hidden: true,
            description:
              'Overrides the default content spacing (by default, inherited from the parent bolt-accordion)',
            $ref: '#/definitions/spacing',
          },
        },
      },
    },
    single: {
      type: 'boolean',
      description: 'Allow only one section to open at a time.',
      default: false,
      enum: [true, false],
    },
    no_separator: {
      type: 'boolean',
      title: 'no_separator (twig) / no-separator (web component)',
      description: 'Hides the separator in between items.',
      default: false,
      enum: [true, false],
    },
    box_shadow: {
      type: 'boolean',
      title: 'box_shadow (twig) / box-shadow (web component)',
      description: 'Creates a box shadow around the accordion.',
      default: false,
      enum: [true, false],
    },
    spacing: {
      $ref: '#/definitions/spacing',
      type: 'string',
      description: 'Controls the inset spacing of each item.',
      default: 'medium',
    },
    icon_valign: {
      type: 'string',
      title: 'icon_valign (twig) / icon-valign (web component)',
      description:
        'Vertically align the accordion trigger content and trigger icon.',
      default: 'center',
      enum: ['top', 'center'],
    },
  },
  definitions: {
    spacing: {
      enum: ['none', 'xsmall', 'small', 'medium', 'large'],
    },
  },
};
