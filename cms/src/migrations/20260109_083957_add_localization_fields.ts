import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'ne');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'ne');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('en', 'ne');
  CREATE TABLE "pages_hero_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_content_columns_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_values_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_licenses_locales" (
  	"title" varchar,
  	"description" varchar,
  	"license_id_label" varchar,
  	"license_id_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_leaders_locales" (
  	"name" varchar,
  	"role" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_contact_methods_locales" (
  	"title" varchar,
  	"content" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_education_topics_locales" (
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_risk_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_investor_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_practices_dos_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_practices_donts_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_home_hero_features_locales" (
  	"title" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_home_trust_indicators_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_home_service_previews_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_locales" (
  	"hero_title" varchar DEFAULT 'About Nepal Securities',
  	"hero_description" varchar DEFAULT 'A trusted name in Nepal''s capital market, dedicated to empowering investors with professional brokerage services.',
  	"who_we_are_title" varchar DEFAULT 'Who We Are',
  	"who_we_are_content" jsonb,
  	"values_title" varchar DEFAULT 'Our Values',
  	"compliance_title" varchar DEFAULT 'License & Regulatory Compliance',
  	"leadership_title" varchar DEFAULT 'Our Leadership',
  	"commitment_title" varchar DEFAULT 'Our Commitment to You',
  	"commitment_description" varchar,
  	"contact_hero_title" varchar DEFAULT 'Contact Us',
  	"contact_hero_description" varchar DEFAULT 'Get in touch with our team for any queries or assistance',
  	"contact_form_title" varchar DEFAULT 'Send us a Message',
  	"contact_info_title" varchar DEFAULT 'Contact Information',
  	"visit_office_title" varchar DEFAULT 'Visit Our Office',
  	"visit_office_description" varchar DEFAULT 'We welcome you to visit our office for account opening, document submission, or any queries. Our team is ready to assist you.',
  	"response_time_title" varchar DEFAULT 'Response Time',
  	"response_time_description" varchar DEFAULT 'We strive to respond to all inquiries within 24-48 business hours. For urgent matters during trading hours, please call us directly.',
  	"investor_hero_title" varchar DEFAULT 'Investor Education',
  	"investor_hero_description" varchar DEFAULT 'Learn the basics of stock market investing in Nepal and make informed decisions',
  	"risk_title" varchar DEFAULT 'Risk Disclaimer',
  	"investor_faq_title" varchar DEFAULT 'Frequently Asked Questions',
  	"investor_faq_description" varchar DEFAULT 'Common questions from new investors in Nepal''s stock market',
  	"practices_title" varchar DEFAULT 'Investment Best Practices',
  	"investor_commitment_title" varchar DEFAULT 'Our Educational Commitment',
  	"investor_commitment_text1" varchar,
  	"investor_commitment_text2" varchar,
  	"home_hero_badge" varchar DEFAULT 'SEBON Licensed & NEPSE Member',
  	"home_hero_title" varchar DEFAULT 'Your Trusted Partner in Nepal''s Capital Market',
  	"home_hero_description" varchar DEFAULT 'Navigate the Nepal Stock Exchange with confidence. Professional brokerage services for retail and institutional investors.',
  	"home_services_title" varchar DEFAULT 'Our Services',
  	"home_services_description" varchar DEFAULT 'Comprehensive brokerage services designed for Nepali investors',
  	"home_cta_title" varchar DEFAULT 'Ready to Start Trading?',
  	"home_cta_description" varchar DEFAULT 'Open your trading account today and get access to Nepal''s capital market',
  	"home_cta_button_text" varchar DEFAULT 'Open Trading Account',
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_hero_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_values_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_licenses_locales" (
  	"title" varchar,
  	"description" varchar,
  	"license_id_label" varchar,
  	"license_id_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_leaders_locales" (
  	"name" varchar,
  	"role" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_contact_methods_locales" (
  	"title" varchar,
  	"content" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_education_topics_locales" (
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_risk_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_investor_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_practices_dos_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_practices_donts_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_home_hero_features_locales" (
  	"title" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_home_trust_indicators_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_home_service_previews_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_hero_title" varchar DEFAULT 'About Nepal Securities',
  	"version_hero_description" varchar DEFAULT 'A trusted name in Nepal''s capital market, dedicated to empowering investors with professional brokerage services.',
  	"version_who_we_are_title" varchar DEFAULT 'Who We Are',
  	"version_who_we_are_content" jsonb,
  	"version_values_title" varchar DEFAULT 'Our Values',
  	"version_compliance_title" varchar DEFAULT 'License & Regulatory Compliance',
  	"version_leadership_title" varchar DEFAULT 'Our Leadership',
  	"version_commitment_title" varchar DEFAULT 'Our Commitment to You',
  	"version_commitment_description" varchar,
  	"version_contact_hero_title" varchar DEFAULT 'Contact Us',
  	"version_contact_hero_description" varchar DEFAULT 'Get in touch with our team for any queries or assistance',
  	"version_contact_form_title" varchar DEFAULT 'Send us a Message',
  	"version_contact_info_title" varchar DEFAULT 'Contact Information',
  	"version_visit_office_title" varchar DEFAULT 'Visit Our Office',
  	"version_visit_office_description" varchar DEFAULT 'We welcome you to visit our office for account opening, document submission, or any queries. Our team is ready to assist you.',
  	"version_response_time_title" varchar DEFAULT 'Response Time',
  	"version_response_time_description" varchar DEFAULT 'We strive to respond to all inquiries within 24-48 business hours. For urgent matters during trading hours, please call us directly.',
  	"version_investor_hero_title" varchar DEFAULT 'Investor Education',
  	"version_investor_hero_description" varchar DEFAULT 'Learn the basics of stock market investing in Nepal and make informed decisions',
  	"version_risk_title" varchar DEFAULT 'Risk Disclaimer',
  	"version_investor_faq_title" varchar DEFAULT 'Frequently Asked Questions',
  	"version_investor_faq_description" varchar DEFAULT 'Common questions from new investors in Nepal''s stock market',
  	"version_practices_title" varchar DEFAULT 'Investment Best Practices',
  	"version_investor_commitment_title" varchar DEFAULT 'Our Educational Commitment',
  	"version_investor_commitment_text1" varchar,
  	"version_investor_commitment_text2" varchar,
  	"version_home_hero_badge" varchar DEFAULT 'SEBON Licensed & NEPSE Member',
  	"version_home_hero_title" varchar DEFAULT 'Your Trusted Partner in Nepal''s Capital Market',
  	"version_home_hero_description" varchar DEFAULT 'Navigate the Nepal Stock Exchange with confidence. Professional brokerage services for retail and institutional investors.',
  	"version_home_services_title" varchar DEFAULT 'Our Services',
  	"version_home_services_description" varchar DEFAULT 'Comprehensive brokerage services designed for Nepali investors',
  	"version_home_cta_title" varchar DEFAULT 'Ready to Start Trading?',
  	"version_home_cta_description" varchar DEFAULT 'Open your trading account today and get access to Nepal''s capital market',
  	"version_home_cta_button_text" varchar DEFAULT 'Open Trading Account',
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "posts_locales" (
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_locales" (
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "forms_blocks_checkbox_locales" (
  	"label" varchar,
  	"default_value" boolean,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_country_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_email_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_message_locales" (
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_number_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select_options_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_state_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_text_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_textarea_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_emails_locales" (
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_locales" (
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "search_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "header_nav_items_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_quick_links_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_legal_links_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_locales" (
  	"brand_company_name" varchar NOT NULL,
  	"brand_tagline" varchar,
  	"brand_description" varchar,
  	"risk_disclaimer_title" varchar DEFAULT 'Risk Disclaimer',
  	"risk_disclaimer_content" varchar,
  	"bottom_copyright" varchar,
  	"bottom_license_info" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "site_settings_office_office_hours_locales" (
  	"day" varchar NOT NULL,
  	"time" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_locales" (
  	"branding_site_name" varchar,
  	"office_address_value" varchar DEFAULT 'New Baneshwor, Kathmandu
  Nepal' NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_meta_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "posts" DROP CONSTRAINT "posts_meta_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX "pages_meta_meta_image_6_idx";
  DROP INDEX "_pages_v_version_meta_version_meta_image_6_idx";
  DROP INDEX "posts_meta_meta_image_idx";
  DROP INDEX "_posts_v_version_meta_version_meta_image_idx";
  ALTER TABLE "_pages_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN "published_locale" "enum__pages_v_published_locale";
  ALTER TABLE "_posts_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_posts_v" ADD COLUMN "published_locale" "enum__posts_v_published_locale";
  ALTER TABLE "categories_breadcrumbs" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_hero_links_locales" ADD CONSTRAINT "pages_hero_links_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links_locales" ADD CONSTRAINT "pages_blocks_cta_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns_locales" ADD CONSTRAINT "pages_blocks_content_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_values_locales" ADD CONSTRAINT "pages_values_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_values"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_licenses_locales" ADD CONSTRAINT "pages_licenses_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_licenses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_leaders_locales" ADD CONSTRAINT "pages_leaders_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_leaders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_contact_methods_locales" ADD CONSTRAINT "pages_contact_methods_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_contact_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_education_topics_locales" ADD CONSTRAINT "pages_education_topics_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_education_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_risk_items_locales" ADD CONSTRAINT "pages_risk_items_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_risk_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_investor_faqs_locales" ADD CONSTRAINT "pages_investor_faqs_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_investor_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_practices_dos_locales" ADD CONSTRAINT "pages_practices_dos_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_practices_dos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_practices_donts_locales" ADD CONSTRAINT "pages_practices_donts_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_practices_donts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_home_hero_features_locales" ADD CONSTRAINT "pages_home_hero_features_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_home_hero_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_home_trust_indicators_locales" ADD CONSTRAINT "pages_home_trust_indicators_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_home_trust_indicators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_home_service_previews_locales" ADD CONSTRAINT "pages_home_service_previews_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_home_service_previews"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links_locales" ADD CONSTRAINT "_pages_v_version_hero_links_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links_locales" ADD CONSTRAINT "_pages_v_blocks_cta_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns_locales" ADD CONSTRAINT "_pages_v_blocks_content_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_values_locales" ADD CONSTRAINT "_pages_v_version_values_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_values"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_licenses_locales" ADD CONSTRAINT "_pages_v_version_licenses_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_licenses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_leaders_locales" ADD CONSTRAINT "_pages_v_version_leaders_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_leaders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_contact_methods_locales" ADD CONSTRAINT "_pages_v_version_contact_methods_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_contact_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_education_topics_locales" ADD CONSTRAINT "_pages_v_version_education_topics_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_education_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_risk_items_locales" ADD CONSTRAINT "_pages_v_version_risk_items_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_risk_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_investor_faqs_locales" ADD CONSTRAINT "_pages_v_version_investor_faqs_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_investor_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_practices_dos_locales" ADD CONSTRAINT "_pages_v_version_practices_dos_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_practices_dos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_practices_donts_locales" ADD CONSTRAINT "_pages_v_version_practices_donts_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_practices_donts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_home_hero_features_locales" ADD CONSTRAINT "_pages_v_version_home_hero_features_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_home_hero_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_home_trust_indicators_locales" ADD CONSTRAINT "_pages_v_version_home_trust_indicators_locales_parent_i_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_home_trust_indicators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_home_service_previews_locales" ADD CONSTRAINT "_pages_v_version_home_service_previews_locales_parent_i_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_home_service_previews"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_6_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox_locales" ADD CONSTRAINT "forms_blocks_checkbox_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_checkbox"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country_locales" ADD CONSTRAINT "forms_blocks_country_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_country"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email_locales" ADD CONSTRAINT "forms_blocks_email_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_email"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message_locales" ADD CONSTRAINT "forms_blocks_message_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_message"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number_locales" ADD CONSTRAINT "forms_blocks_number_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_number"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options_locales" ADD CONSTRAINT "forms_blocks_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_locales" ADD CONSTRAINT "forms_blocks_select_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state_locales" ADD CONSTRAINT "forms_blocks_state_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_state"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text_locales" ADD CONSTRAINT "forms_blocks_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea_locales" ADD CONSTRAINT "forms_blocks_textarea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_textarea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_emails"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_locales" ADD CONSTRAINT "search_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_locales" ADD CONSTRAINT "header_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_quick_links_locales" ADD CONSTRAINT "footer_quick_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_quick_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links_locales" ADD CONSTRAINT "footer_legal_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_legal_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_office_office_hours_locales" ADD CONSTRAINT "site_settings_office_office_hours_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_office_office_hours"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "pages_hero_links_locales_locale_parent_id_unique_6" ON "pages_hero_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_cta_links_locales_locale_parent_id_unique" ON "pages_blocks_cta_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_content_columns_locales_locale_parent_id_unique" ON "pages_blocks_content_columns_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_values_locales_locale_parent_id_unique_6" ON "pages_values_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_licenses_locales_locale_parent_id_unique_6" ON "pages_licenses_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_leaders_locales_locale_parent_id_unique_6" ON "pages_leaders_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_contact_methods_locales_locale_parent_id_unique_6" ON "pages_contact_methods_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_education_topics_locales_locale_parent_id_unique_6" ON "pages_education_topics_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_risk_items_locales_locale_parent_id_unique_6" ON "pages_risk_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_investor_faqs_locales_locale_parent_id_unique_6" ON "pages_investor_faqs_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_practices_dos_locales_locale_parent_id_unique_6" ON "pages_practices_dos_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_practices_donts_locales_locale_parent_id_unique_6" ON "pages_practices_donts_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_home_hero_features_locales_locale_parent_id_unique_6" ON "pages_home_hero_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_home_trust_indicators_locales_locale_parent_id_uniqu_6" ON "pages_home_trust_indicators_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_home_service_previews_locales_locale_parent_id_uniqu_6" ON "pages_home_service_previews_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_meta_meta_image_6_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique_6" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_hero_links_locales_locale_parent_id_uniqu_6" ON "_pages_v_version_hero_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_cta_links_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_content_columns_locales_locale_parent_id_uni" ON "_pages_v_blocks_content_columns_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_values_locales_locale_parent_id_unique_6" ON "_pages_v_version_values_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_licenses_locales_locale_parent_id_unique_6" ON "_pages_v_version_licenses_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_leaders_locales_locale_parent_id_unique_6" ON "_pages_v_version_leaders_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_contact_methods_locales_locale_parent_id__6" ON "_pages_v_version_contact_methods_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_education_topics_locales_locale_parent_id_6" ON "_pages_v_version_education_topics_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_risk_items_locales_locale_parent_id_uniqu_6" ON "_pages_v_version_risk_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_investor_faqs_locales_locale_parent_id_un_6" ON "_pages_v_version_investor_faqs_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_practices_dos_locales_locale_parent_id_un_6" ON "_pages_v_version_practices_dos_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_practices_donts_locales_locale_parent_id__6" ON "_pages_v_version_practices_donts_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_home_hero_features_locales_locale_parent__6" ON "_pages_v_version_home_hero_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_home_trust_indicators_locales_locale_pare_6" ON "_pages_v_version_home_trust_indicators_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_home_service_previews_locales_locale_pare_6" ON "_pages_v_version_home_service_previews_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_6_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique_6" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_checkbox_locales_locale_parent_id_unique" ON "forms_blocks_checkbox_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_country_locales_locale_parent_id_unique" ON "forms_blocks_country_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_email_locales_locale_parent_id_unique" ON "forms_blocks_email_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_message_locales_locale_parent_id_unique" ON "forms_blocks_message_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_number_locales_locale_parent_id_unique" ON "forms_blocks_number_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_select_options_locales_locale_parent_id_unique" ON "forms_blocks_select_options_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_select_locales_locale_parent_id_unique" ON "forms_blocks_select_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_state_locales_locale_parent_id_unique" ON "forms_blocks_state_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_text_locales_locale_parent_id_unique" ON "forms_blocks_text_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_textarea_locales_locale_parent_id_unique" ON "forms_blocks_textarea_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_emails_locales_locale_parent_id_unique" ON "forms_emails_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_locales_locale_parent_id_unique" ON "forms_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "search_locales_locale_parent_id_unique" ON "search_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "header_nav_items_locales_locale_parent_id_unique" ON "header_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_quick_links_locales_locale_parent_id_unique" ON "footer_quick_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_legal_links_locales_locale_parent_id_unique" ON "footer_legal_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "site_settings_office_office_hours_locales_locale_parent_id_u" ON "site_settings_office_office_hours_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_snapshot_6_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_6_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX "categories_breadcrumbs_locale_idx" ON "categories_breadcrumbs" USING btree ("_locale");
  ALTER TABLE "pages_hero_links" DROP COLUMN "link_label";
  ALTER TABLE "pages_blocks_cta_links" DROP COLUMN "link_label";
  ALTER TABLE "pages_blocks_content_columns" DROP COLUMN "link_label";
  ALTER TABLE "pages_values" DROP COLUMN "title";
  ALTER TABLE "pages_values" DROP COLUMN "description";
  ALTER TABLE "pages_licenses" DROP COLUMN "title";
  ALTER TABLE "pages_licenses" DROP COLUMN "description";
  ALTER TABLE "pages_licenses" DROP COLUMN "license_id_label";
  ALTER TABLE "pages_licenses" DROP COLUMN "license_id_value";
  ALTER TABLE "pages_leaders" DROP COLUMN "name";
  ALTER TABLE "pages_leaders" DROP COLUMN "role";
  ALTER TABLE "pages_leaders" DROP COLUMN "description";
  ALTER TABLE "pages_contact_methods" DROP COLUMN "title";
  ALTER TABLE "pages_contact_methods" DROP COLUMN "content";
  ALTER TABLE "pages_education_topics" DROP COLUMN "title";
  ALTER TABLE "pages_education_topics" DROP COLUMN "content";
  ALTER TABLE "pages_risk_items" DROP COLUMN "title";
  ALTER TABLE "pages_risk_items" DROP COLUMN "text";
  ALTER TABLE "pages_investor_faqs" DROP COLUMN "question";
  ALTER TABLE "pages_investor_faqs" DROP COLUMN "answer";
  ALTER TABLE "pages_practices_dos" DROP COLUMN "text";
  ALTER TABLE "pages_practices_donts" DROP COLUMN "text";
  ALTER TABLE "pages_home_hero_features" DROP COLUMN "title";
  ALTER TABLE "pages_home_hero_features" DROP COLUMN "subtitle";
  ALTER TABLE "pages_home_trust_indicators" DROP COLUMN "title";
  ALTER TABLE "pages_home_trust_indicators" DROP COLUMN "description";
  ALTER TABLE "pages_home_service_previews" DROP COLUMN "title";
  ALTER TABLE "pages_home_service_previews" DROP COLUMN "description";
  ALTER TABLE "pages" DROP COLUMN "hero_title";
  ALTER TABLE "pages" DROP COLUMN "hero_description";
  ALTER TABLE "pages" DROP COLUMN "who_we_are_title";
  ALTER TABLE "pages" DROP COLUMN "who_we_are_content";
  ALTER TABLE "pages" DROP COLUMN "values_title";
  ALTER TABLE "pages" DROP COLUMN "compliance_title";
  ALTER TABLE "pages" DROP COLUMN "leadership_title";
  ALTER TABLE "pages" DROP COLUMN "commitment_title";
  ALTER TABLE "pages" DROP COLUMN "commitment_description";
  ALTER TABLE "pages" DROP COLUMN "contact_hero_title";
  ALTER TABLE "pages" DROP COLUMN "contact_hero_description";
  ALTER TABLE "pages" DROP COLUMN "contact_form_title";
  ALTER TABLE "pages" DROP COLUMN "contact_info_title";
  ALTER TABLE "pages" DROP COLUMN "visit_office_title";
  ALTER TABLE "pages" DROP COLUMN "visit_office_description";
  ALTER TABLE "pages" DROP COLUMN "response_time_title";
  ALTER TABLE "pages" DROP COLUMN "response_time_description";
  ALTER TABLE "pages" DROP COLUMN "investor_hero_title";
  ALTER TABLE "pages" DROP COLUMN "investor_hero_description";
  ALTER TABLE "pages" DROP COLUMN "risk_title";
  ALTER TABLE "pages" DROP COLUMN "practices_title";
  ALTER TABLE "pages" DROP COLUMN "investor_commitment_title";
  ALTER TABLE "pages" DROP COLUMN "investor_commitment_text1";
  ALTER TABLE "pages" DROP COLUMN "investor_commitment_text2";
  ALTER TABLE "pages" DROP COLUMN "home_hero_badge";
  ALTER TABLE "pages" DROP COLUMN "home_hero_title";
  ALTER TABLE "pages" DROP COLUMN "home_hero_description";
  ALTER TABLE "pages" DROP COLUMN "home_services_title";
  ALTER TABLE "pages" DROP COLUMN "home_services_description";
  ALTER TABLE "pages" DROP COLUMN "home_cta_title";
  ALTER TABLE "pages" DROP COLUMN "home_cta_description";
  ALTER TABLE "pages" DROP COLUMN "home_cta_button_text";
  ALTER TABLE "pages" DROP COLUMN "meta_title";
  ALTER TABLE "pages" DROP COLUMN "meta_image_id";
  ALTER TABLE "pages" DROP COLUMN "meta_description";
  ALTER TABLE "_pages_v_version_hero_links" DROP COLUMN "link_label";
  ALTER TABLE "_pages_v_blocks_cta_links" DROP COLUMN "link_label";
  ALTER TABLE "_pages_v_blocks_content_columns" DROP COLUMN "link_label";
  ALTER TABLE "_pages_v_version_values" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_values" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_licenses" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_licenses" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_licenses" DROP COLUMN "license_id_label";
  ALTER TABLE "_pages_v_version_licenses" DROP COLUMN "license_id_value";
  ALTER TABLE "_pages_v_version_leaders" DROP COLUMN "name";
  ALTER TABLE "_pages_v_version_leaders" DROP COLUMN "role";
  ALTER TABLE "_pages_v_version_leaders" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_contact_methods" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_contact_methods" DROP COLUMN "content";
  ALTER TABLE "_pages_v_version_education_topics" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_education_topics" DROP COLUMN "content";
  ALTER TABLE "_pages_v_version_risk_items" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_risk_items" DROP COLUMN "text";
  ALTER TABLE "_pages_v_version_investor_faqs" DROP COLUMN "question";
  ALTER TABLE "_pages_v_version_investor_faqs" DROP COLUMN "answer";
  ALTER TABLE "_pages_v_version_practices_dos" DROP COLUMN "text";
  ALTER TABLE "_pages_v_version_practices_donts" DROP COLUMN "text";
  ALTER TABLE "_pages_v_version_home_hero_features" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_home_hero_features" DROP COLUMN "subtitle";
  ALTER TABLE "_pages_v_version_home_trust_indicators" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_home_trust_indicators" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_home_service_previews" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_home_service_previews" DROP COLUMN "description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_who_we_are_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_who_we_are_content";
  ALTER TABLE "_pages_v" DROP COLUMN "version_values_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_compliance_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_leadership_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_commitment_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_commitment_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_hero_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_form_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_info_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_visit_office_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_visit_office_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_response_time_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_response_time_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_investor_hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_investor_hero_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_risk_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_practices_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_investor_commitment_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_investor_commitment_text1";
  ALTER TABLE "_pages_v" DROP COLUMN "version_investor_commitment_text2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_hero_badge";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_hero_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_services_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_services_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_cta_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_cta_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_cta_button_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_description";
  ALTER TABLE "posts" DROP COLUMN "meta_title";
  ALTER TABLE "posts" DROP COLUMN "meta_image_id";
  ALTER TABLE "posts" DROP COLUMN "meta_description";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_title";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_description";
  ALTER TABLE "forms_blocks_checkbox" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_checkbox" DROP COLUMN "default_value";
  ALTER TABLE "forms_blocks_country" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_email" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_message" DROP COLUMN "message";
  ALTER TABLE "forms_blocks_number" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_select_options" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_select" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_select" DROP COLUMN "default_value";
  ALTER TABLE "forms_blocks_state" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_text" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_text" DROP COLUMN "default_value";
  ALTER TABLE "forms_blocks_textarea" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_textarea" DROP COLUMN "default_value";
  ALTER TABLE "forms_emails" DROP COLUMN "subject";
  ALTER TABLE "forms_emails" DROP COLUMN "message";
  ALTER TABLE "forms" DROP COLUMN "title";
  ALTER TABLE "forms" DROP COLUMN "submit_button_label";
  ALTER TABLE "forms" DROP COLUMN "confirmation_message";
  ALTER TABLE "search" DROP COLUMN "title";
  ALTER TABLE "header_nav_items" DROP COLUMN "link_label";
  ALTER TABLE "footer_quick_links" DROP COLUMN "label";
  ALTER TABLE "footer_legal_links" DROP COLUMN "label";
  ALTER TABLE "footer" DROP COLUMN "brand_company_name";
  ALTER TABLE "footer" DROP COLUMN "brand_tagline";
  ALTER TABLE "footer" DROP COLUMN "brand_description";
  ALTER TABLE "footer" DROP COLUMN "risk_disclaimer_title";
  ALTER TABLE "footer" DROP COLUMN "risk_disclaimer_content";
  ALTER TABLE "footer" DROP COLUMN "bottom_copyright";
  ALTER TABLE "footer" DROP COLUMN "bottom_license_info";
  ALTER TABLE "site_settings_office_office_hours" DROP COLUMN "day";
  ALTER TABLE "site_settings_office_office_hours" DROP COLUMN "time";
  ALTER TABLE "site_settings" DROP COLUMN "branding_site_name";
  ALTER TABLE "site_settings" DROP COLUMN "office_address_value";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_hero_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_columns_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_values_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_licenses_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_leaders_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_contact_methods_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_education_topics_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_risk_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_investor_faqs_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_practices_dos_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_practices_donts_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_home_hero_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_home_trust_indicators_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_home_service_previews_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_hero_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_columns_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_values_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_licenses_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_leaders_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_contact_methods_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_education_topics_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_risk_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_investor_faqs_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_practices_dos_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_practices_donts_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_home_hero_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_home_trust_indicators_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_home_service_previews_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_checkbox_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_country_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_email_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_message_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_number_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_select_options_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_select_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_state_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_text_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_textarea_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_emails_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "search_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_quick_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_legal_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_office_office_hours_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_hero_links_locales" CASCADE;
  DROP TABLE "pages_blocks_cta_links_locales" CASCADE;
  DROP TABLE "pages_blocks_content_columns_locales" CASCADE;
  DROP TABLE "pages_values_locales" CASCADE;
  DROP TABLE "pages_licenses_locales" CASCADE;
  DROP TABLE "pages_leaders_locales" CASCADE;
  DROP TABLE "pages_contact_methods_locales" CASCADE;
  DROP TABLE "pages_education_topics_locales" CASCADE;
  DROP TABLE "pages_risk_items_locales" CASCADE;
  DROP TABLE "pages_investor_faqs_locales" CASCADE;
  DROP TABLE "pages_practices_dos_locales" CASCADE;
  DROP TABLE "pages_practices_donts_locales" CASCADE;
  DROP TABLE "pages_home_hero_features_locales" CASCADE;
  DROP TABLE "pages_home_trust_indicators_locales" CASCADE;
  DROP TABLE "pages_home_service_previews_locales" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "_pages_v_version_hero_links_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns_locales" CASCADE;
  DROP TABLE "_pages_v_version_values_locales" CASCADE;
  DROP TABLE "_pages_v_version_licenses_locales" CASCADE;
  DROP TABLE "_pages_v_version_leaders_locales" CASCADE;
  DROP TABLE "_pages_v_version_contact_methods_locales" CASCADE;
  DROP TABLE "_pages_v_version_education_topics_locales" CASCADE;
  DROP TABLE "_pages_v_version_risk_items_locales" CASCADE;
  DROP TABLE "_pages_v_version_investor_faqs_locales" CASCADE;
  DROP TABLE "_pages_v_version_practices_dos_locales" CASCADE;
  DROP TABLE "_pages_v_version_practices_donts_locales" CASCADE;
  DROP TABLE "_pages_v_version_home_hero_features_locales" CASCADE;
  DROP TABLE "_pages_v_version_home_trust_indicators_locales" CASCADE;
  DROP TABLE "_pages_v_version_home_service_previews_locales" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "forms_blocks_checkbox_locales" CASCADE;
  DROP TABLE "forms_blocks_country_locales" CASCADE;
  DROP TABLE "forms_blocks_email_locales" CASCADE;
  DROP TABLE "forms_blocks_message_locales" CASCADE;
  DROP TABLE "forms_blocks_number_locales" CASCADE;
  DROP TABLE "forms_blocks_select_options_locales" CASCADE;
  DROP TABLE "forms_blocks_select_locales" CASCADE;
  DROP TABLE "forms_blocks_state_locales" CASCADE;
  DROP TABLE "forms_blocks_text_locales" CASCADE;
  DROP TABLE "forms_blocks_textarea_locales" CASCADE;
  DROP TABLE "forms_emails_locales" CASCADE;
  DROP TABLE "forms_locales" CASCADE;
  DROP TABLE "search_locales" CASCADE;
  DROP TABLE "header_nav_items_locales" CASCADE;
  DROP TABLE "footer_quick_links_locales" CASCADE;
  DROP TABLE "footer_legal_links_locales" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP TABLE "site_settings_office_office_hours_locales" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  DROP INDEX "_pages_v_snapshot_6_idx";
  DROP INDEX "_pages_v_published_locale_6_idx";
  DROP INDEX "_posts_v_snapshot_idx";
  DROP INDEX "_posts_v_published_locale_idx";
  DROP INDEX "categories_breadcrumbs_locale_idx";
  ALTER TABLE "pages_hero_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "pages_blocks_cta_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "pages_blocks_content_columns" ADD COLUMN "link_label" varchar;
  ALTER TABLE "pages_values" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_values" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_licenses" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_licenses" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_licenses" ADD COLUMN "license_id_label" varchar;
  ALTER TABLE "pages_licenses" ADD COLUMN "license_id_value" varchar;
  ALTER TABLE "pages_leaders" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_leaders" ADD COLUMN "role" varchar;
  ALTER TABLE "pages_leaders" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_contact_methods" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_contact_methods" ADD COLUMN "content" varchar;
  ALTER TABLE "pages_education_topics" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_education_topics" ADD COLUMN "content" jsonb;
  ALTER TABLE "pages_risk_items" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_risk_items" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_investor_faqs" ADD COLUMN "question" varchar;
  ALTER TABLE "pages_investor_faqs" ADD COLUMN "answer" varchar;
  ALTER TABLE "pages_practices_dos" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_practices_donts" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_home_hero_features" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_home_hero_features" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "pages_home_trust_indicators" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_home_trust_indicators" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_home_service_previews" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_home_service_previews" ADD COLUMN "description" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_title" varchar DEFAULT 'About Nepal Securities';
  ALTER TABLE "pages" ADD COLUMN "hero_description" varchar DEFAULT 'A trusted name in Nepal''s capital market, dedicated to empowering investors with professional brokerage services.';
  ALTER TABLE "pages" ADD COLUMN "who_we_are_title" varchar DEFAULT 'Who We Are';
  ALTER TABLE "pages" ADD COLUMN "who_we_are_content" jsonb;
  ALTER TABLE "pages" ADD COLUMN "values_title" varchar DEFAULT 'Our Values';
  ALTER TABLE "pages" ADD COLUMN "compliance_title" varchar DEFAULT 'License & Regulatory Compliance';
  ALTER TABLE "pages" ADD COLUMN "leadership_title" varchar DEFAULT 'Our Leadership';
  ALTER TABLE "pages" ADD COLUMN "commitment_title" varchar DEFAULT 'Our Commitment to You';
  ALTER TABLE "pages" ADD COLUMN "commitment_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "contact_hero_title" varchar DEFAULT 'Contact Us';
  ALTER TABLE "pages" ADD COLUMN "contact_hero_description" varchar DEFAULT 'Get in touch with our team for any queries or assistance';
  ALTER TABLE "pages" ADD COLUMN "contact_form_title" varchar DEFAULT 'Send us a Message';
  ALTER TABLE "pages" ADD COLUMN "contact_info_title" varchar DEFAULT 'Contact Information';
  ALTER TABLE "pages" ADD COLUMN "visit_office_title" varchar DEFAULT 'Visit Our Office';
  ALTER TABLE "pages" ADD COLUMN "visit_office_description" varchar DEFAULT 'We welcome you to visit our office for account opening, document submission, or any queries. Our team is ready to assist you.';
  ALTER TABLE "pages" ADD COLUMN "response_time_title" varchar DEFAULT 'Response Time';
  ALTER TABLE "pages" ADD COLUMN "response_time_description" varchar DEFAULT 'We strive to respond to all inquiries within 24-48 business hours. For urgent matters during trading hours, please call us directly.';
  ALTER TABLE "pages" ADD COLUMN "investor_hero_title" varchar DEFAULT 'Investor Education';
  ALTER TABLE "pages" ADD COLUMN "investor_hero_description" varchar DEFAULT 'Learn the basics of stock market investing in Nepal and make informed decisions';
  ALTER TABLE "pages" ADD COLUMN "risk_title" varchar DEFAULT 'Risk Disclaimer';
  ALTER TABLE "pages" ADD COLUMN "practices_title" varchar DEFAULT 'Investment Best Practices';
  ALTER TABLE "pages" ADD COLUMN "investor_commitment_title" varchar DEFAULT 'Our Educational Commitment';
  ALTER TABLE "pages" ADD COLUMN "investor_commitment_text1" varchar;
  ALTER TABLE "pages" ADD COLUMN "investor_commitment_text2" varchar;
  ALTER TABLE "pages" ADD COLUMN "home_hero_badge" varchar DEFAULT 'SEBON Licensed & NEPSE Member';
  ALTER TABLE "pages" ADD COLUMN "home_hero_title" varchar DEFAULT 'Your Trusted Partner in Nepal''s Capital Market';
  ALTER TABLE "pages" ADD COLUMN "home_hero_description" varchar DEFAULT 'Navigate the Nepal Stock Exchange with confidence. Professional brokerage services for retail and institutional investors.';
  ALTER TABLE "pages" ADD COLUMN "home_services_title" varchar DEFAULT 'Our Services';
  ALTER TABLE "pages" ADD COLUMN "home_services_description" varchar DEFAULT 'Comprehensive brokerage services designed for Nepali investors';
  ALTER TABLE "pages" ADD COLUMN "home_cta_title" varchar DEFAULT 'Ready to Start Trading?';
  ALTER TABLE "pages" ADD COLUMN "home_cta_description" varchar DEFAULT 'Open your trading account today and get access to Nepal''s capital market';
  ALTER TABLE "pages" ADD COLUMN "home_cta_button_text" varchar DEFAULT 'Open Trading Account';
  ALTER TABLE "pages" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "pages" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_pages_v_version_hero_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v_version_values" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_values" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_licenses" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_licenses" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_licenses" ADD COLUMN "license_id_label" varchar;
  ALTER TABLE "_pages_v_version_licenses" ADD COLUMN "license_id_value" varchar;
  ALTER TABLE "_pages_v_version_leaders" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_version_leaders" ADD COLUMN "role" varchar;
  ALTER TABLE "_pages_v_version_leaders" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_contact_methods" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_contact_methods" ADD COLUMN "content" varchar;
  ALTER TABLE "_pages_v_version_education_topics" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_education_topics" ADD COLUMN "content" jsonb;
  ALTER TABLE "_pages_v_version_risk_items" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_risk_items" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_version_investor_faqs" ADD COLUMN "question" varchar;
  ALTER TABLE "_pages_v_version_investor_faqs" ADD COLUMN "answer" varchar;
  ALTER TABLE "_pages_v_version_practices_dos" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_version_practices_donts" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_version_home_hero_features" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_home_hero_features" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "_pages_v_version_home_trust_indicators" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_home_trust_indicators" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_home_service_previews" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_home_service_previews" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_title" varchar DEFAULT 'About Nepal Securities';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_description" varchar DEFAULT 'A trusted name in Nepal''s capital market, dedicated to empowering investors with professional brokerage services.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_who_we_are_title" varchar DEFAULT 'Who We Are';
  ALTER TABLE "_pages_v" ADD COLUMN "version_who_we_are_content" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_values_title" varchar DEFAULT 'Our Values';
  ALTER TABLE "_pages_v" ADD COLUMN "version_compliance_title" varchar DEFAULT 'License & Regulatory Compliance';
  ALTER TABLE "_pages_v" ADD COLUMN "version_leadership_title" varchar DEFAULT 'Our Leadership';
  ALTER TABLE "_pages_v" ADD COLUMN "version_commitment_title" varchar DEFAULT 'Our Commitment to You';
  ALTER TABLE "_pages_v" ADD COLUMN "version_commitment_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_hero_title" varchar DEFAULT 'Contact Us';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_hero_description" varchar DEFAULT 'Get in touch with our team for any queries or assistance';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_form_title" varchar DEFAULT 'Send us a Message';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_info_title" varchar DEFAULT 'Contact Information';
  ALTER TABLE "_pages_v" ADD COLUMN "version_visit_office_title" varchar DEFAULT 'Visit Our Office';
  ALTER TABLE "_pages_v" ADD COLUMN "version_visit_office_description" varchar DEFAULT 'We welcome you to visit our office for account opening, document submission, or any queries. Our team is ready to assist you.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_response_time_title" varchar DEFAULT 'Response Time';
  ALTER TABLE "_pages_v" ADD COLUMN "version_response_time_description" varchar DEFAULT 'We strive to respond to all inquiries within 24-48 business hours. For urgent matters during trading hours, please call us directly.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_investor_hero_title" varchar DEFAULT 'Investor Education';
  ALTER TABLE "_pages_v" ADD COLUMN "version_investor_hero_description" varchar DEFAULT 'Learn the basics of stock market investing in Nepal and make informed decisions';
  ALTER TABLE "_pages_v" ADD COLUMN "version_risk_title" varchar DEFAULT 'Risk Disclaimer';
  ALTER TABLE "_pages_v" ADD COLUMN "version_practices_title" varchar DEFAULT 'Investment Best Practices';
  ALTER TABLE "_pages_v" ADD COLUMN "version_investor_commitment_title" varchar DEFAULT 'Our Educational Commitment';
  ALTER TABLE "_pages_v" ADD COLUMN "version_investor_commitment_text1" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_investor_commitment_text2" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_hero_badge" varchar DEFAULT 'SEBON Licensed & NEPSE Member';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_hero_title" varchar DEFAULT 'Your Trusted Partner in Nepal''s Capital Market';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_hero_description" varchar DEFAULT 'Navigate the Nepal Stock Exchange with confidence. Professional brokerage services for retail and institutional investors.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_services_title" varchar DEFAULT 'Our Services';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_services_description" varchar DEFAULT 'Comprehensive brokerage services designed for Nepali investors';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_cta_title" varchar DEFAULT 'Ready to Start Trading?';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_cta_description" varchar DEFAULT 'Open your trading account today and get access to Nepal''s capital market';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_cta_button_text" varchar DEFAULT 'Open Trading Account';
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "posts" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "forms_blocks_checkbox" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_checkbox" ADD COLUMN "default_value" boolean;
  ALTER TABLE "forms_blocks_country" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_email" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_message" ADD COLUMN "message" jsonb;
  ALTER TABLE "forms_blocks_number" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_select_options" ADD COLUMN "label" varchar NOT NULL;
  ALTER TABLE "forms_blocks_select" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_select" ADD COLUMN "default_value" varchar;
  ALTER TABLE "forms_blocks_state" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_text" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_text" ADD COLUMN "default_value" varchar;
  ALTER TABLE "forms_blocks_textarea" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_textarea" ADD COLUMN "default_value" varchar;
  ALTER TABLE "forms_emails" ADD COLUMN "subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL;
  ALTER TABLE "forms_emails" ADD COLUMN "message" jsonb;
  ALTER TABLE "forms" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "forms" ADD COLUMN "submit_button_label" varchar;
  ALTER TABLE "forms" ADD COLUMN "confirmation_message" jsonb;
  ALTER TABLE "search" ADD COLUMN "title" varchar;
  ALTER TABLE "header_nav_items" ADD COLUMN "link_label" varchar NOT NULL;
  ALTER TABLE "footer_quick_links" ADD COLUMN "label" varchar NOT NULL;
  ALTER TABLE "footer_legal_links" ADD COLUMN "label" varchar NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "brand_company_name" varchar NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "brand_tagline" varchar;
  ALTER TABLE "footer" ADD COLUMN "brand_description" varchar;
  ALTER TABLE "footer" ADD COLUMN "risk_disclaimer_title" varchar DEFAULT 'Risk Disclaimer';
  ALTER TABLE "footer" ADD COLUMN "risk_disclaimer_content" varchar;
  ALTER TABLE "footer" ADD COLUMN "bottom_copyright" varchar;
  ALTER TABLE "footer" ADD COLUMN "bottom_license_info" varchar;
  ALTER TABLE "site_settings_office_office_hours" ADD COLUMN "day" varchar NOT NULL;
  ALTER TABLE "site_settings_office_office_hours" ADD COLUMN "time" varchar NOT NULL;
  ALTER TABLE "site_settings" ADD COLUMN "branding_site_name" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "office_address_value" varchar DEFAULT 'New Baneshwor, Kathmandu
  Nepal' NOT NULL;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_meta_meta_image_6_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_6_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  ALTER TABLE "_pages_v" DROP COLUMN "snapshot";
  ALTER TABLE "_pages_v" DROP COLUMN "published_locale";
  ALTER TABLE "_posts_v" DROP COLUMN "snapshot";
  ALTER TABLE "_posts_v" DROP COLUMN "published_locale";
  ALTER TABLE "categories_breadcrumbs" DROP COLUMN "_locale";
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum__posts_v_published_locale";`)
}
