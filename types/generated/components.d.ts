import type { Schema, Struct } from '@strapi/strapi';

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
    icon: 'shirt';
  };
  attributes: {
    href: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VariantVariant extends Struct.ComponentSchema {
  collectionName: 'components_variant_variants';
  info: {
    displayName: 'variant';
    icon: 'dashboard';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer & Schema.Attribute.Required;
    size: Schema.Attribute.Enumeration<['s', 'm', 'x', 'xl', 'xxl']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.button': UiButton;
      'variant.variant': VariantVariant;
    }
  }
}
