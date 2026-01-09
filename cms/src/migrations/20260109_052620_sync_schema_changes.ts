import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_service_blocks_side_box_type" AS ENUM('blue-cta', 'gray-list', 'simple-note');
  CREATE TYPE "public"."enum_pages_education_topics_theme" AS ENUM('blue', 'green');
  CREATE TYPE "public"."enum__pages_v_version_service_blocks_side_box_type" AS ENUM('blue-cta', 'gray-list', 'simple-note');
  CREATE TYPE "public"."enum__pages_v_version_education_topics_theme" AS ENUM('blue', 'green');
  CREATE TYPE "public"."enum_site_settings_office_phones_type" AS ENUM('landline', 'mobile');
  CREATE TYPE "public"."enum_site_settings_office_emails_type" AS ENUM('general', 'support');
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'open-account' BEFORE 'home';
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'investor' BEFORE 'home';
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'contact';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'open-account' BEFORE 'home';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'investor' BEFORE 'home';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'contact';
  CREATE TABLE "pages_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value_icon" varchar DEFAULT 'Shield',
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_licenses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"license_icon" varchar DEFAULT 'Shield',
  	"title" varchar,
  	"description" varchar,
  	"license_id_label" varchar,
  	"license_id_value" varchar
  );
  
  CREATE TABLE "pages_leaders" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar,
  	"role" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_service_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_service_blocks_side_box_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_service_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"service_icon" varchar DEFAULT 'TrendingUp',
  	"description" varchar,
  	"side_box_title" varchar,
  	"side_box_type" "enum_pages_service_blocks_side_box_type" DEFAULT 'simple-note',
  	"side_box_description" varchar,
  	"cta_text" varchar,
  	"cta_url" varchar
  );
  
  CREATE TABLE "pages_contact_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'MapPin',
  	"title" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "pages_open_account_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_open_account_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"icon" varchar DEFAULT 'FileText'
  );
  
  CREATE TABLE "pages_open_account_downloads" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link" varchar,
  	"icon" varchar DEFAULT 'Download'
  );
  
  CREATE TABLE "pages_info_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_education_topics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" varchar DEFAULT 'BookOpen',
  	"theme" "enum_pages_education_topics_theme" DEFAULT 'blue',
  	"content" jsonb
  );
  
  CREATE TABLE "pages_risk_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_investor_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_practices_dos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_practices_donts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_home_hero_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'CheckCircle',
  	"title" varchar,
  	"subtitle" varchar
  );
  
  CREATE TABLE "pages_home_trust_indicators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'Shield',
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_home_service_previews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "_pages_v_version_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value_icon" varchar DEFAULT 'Shield',
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_licenses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"license_icon" varchar DEFAULT 'Shield',
  	"title" varchar,
  	"description" varchar,
  	"license_id_label" varchar,
  	"license_id_value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_leaders" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar,
  	"role" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_service_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_service_blocks_side_box_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_service_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"service_icon" varchar DEFAULT 'TrendingUp',
  	"description" varchar,
  	"side_box_title" varchar,
  	"side_box_type" "enum__pages_v_version_service_blocks_side_box_type" DEFAULT 'simple-note',
  	"side_box_description" varchar,
  	"cta_text" varchar,
  	"cta_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_contact_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'MapPin',
  	"title" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_open_account_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_open_account_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"icon" varchar DEFAULT 'FileText',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_open_account_downloads" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link" varchar,
  	"icon" varchar DEFAULT 'Download',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_info_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_education_topics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" varchar DEFAULT 'BookOpen',
  	"theme" "enum__pages_v_version_education_topics_theme" DEFAULT 'blue',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_risk_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_investor_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_practices_dos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_practices_donts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_home_hero_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'CheckCircle',
  	"title" varchar,
  	"subtitle" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_home_trust_indicators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'Shield',
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_home_service_previews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "footer_quick_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_office_phones" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"type" "enum_site_settings_office_phones_type" DEFAULT 'landline'
  );
  
  CREATE TABLE "site_settings_office_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"type" "enum_site_settings_office_emails_type" DEFAULT 'general'
  );
  
  CREATE TABLE "site_settings_office_office_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"day" varchar NOT NULL,
  	"time" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"branding_site_name" varchar,
  	"branding_logo_id" integer,
  	"office_address_value" varchar DEFAULT 'New Baneshwor, Kathmandu
  Nepal' NOT NULL,
  	"office_address_icon" varchar DEFAULT 'MapPin',
  	"office_phone_icon" varchar DEFAULT 'Phone',
  	"office_email_icon" varchar DEFAULT 'Mail',
  	"office_office_hours_icon" varchar DEFAULT 'Clock',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "setting" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"light_mode_icon_id" integer,
  	"light_mode_logo_id" integer,
  	"dark_mode_icon_id" integer,
  	"dark_mode_logo_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_directors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_leadership" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_products_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_products_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_products" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_directors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_leadership" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_products_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_products_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_products" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_nav_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_directors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_leadership" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_products_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_products_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_products" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_directors" CASCADE;
  DROP TABLE "pages_leadership" CASCADE;
  DROP TABLE "pages_timeline" CASCADE;
  DROP TABLE "pages_stats" CASCADE;
  DROP TABLE "pages_testimonials" CASCADE;
  DROP TABLE "pages_products_stats" CASCADE;
  DROP TABLE "pages_products_features" CASCADE;
  DROP TABLE "pages_products" CASCADE;
  DROP TABLE "_pages_v_version_directors" CASCADE;
  DROP TABLE "_pages_v_version_leadership" CASCADE;
  DROP TABLE "_pages_v_version_timeline" CASCADE;
  DROP TABLE "_pages_v_version_stats" CASCADE;
  DROP TABLE "_pages_v_version_testimonials" CASCADE;
  DROP TABLE "_pages_v_version_products_stats" CASCADE;
  DROP TABLE "_pages_v_version_products_features" CASCADE;
  DROP TABLE "_pages_v_version_products" CASCADE;
  DROP TABLE "footer_nav_items" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "about_directors" CASCADE;
  DROP TABLE "about_leadership" CASCADE;
  DROP TABLE "about_timeline" CASCADE;
  DROP TABLE "about_stats" CASCADE;
  DROP TABLE "about_testimonials" CASCADE;
  DROP TABLE "about" CASCADE;
  DROP TABLE "services_products_stats" CASCADE;
  DROP TABLE "services_products_features" CASCADE;
  DROP TABLE "services_products" CASCADE;
  DROP TABLE "services" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_parent_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_pages_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_posts_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_categories_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_parent_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_pages_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_posts_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_categories_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pages_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_roles_fk";
  
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE text;
  DROP TYPE "public"."enum_roles_permissions_resource";
  CREATE TYPE "public"."enum_roles_permissions_resource" AS ENUM('pages', 'media', 'users', 'posts', 'categories');
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE "public"."enum_roles_permissions_resource" USING "resource"::"public"."enum_roles_permissions_resource";
  DROP INDEX "pages_hero_hero_media_idx";
  DROP INDEX "pages_meta_meta_image_idx";
  DROP INDEX "pages_slug_idx";
  DROP INDEX "pages_updated_at_idx";
  DROP INDEX "pages_created_at_idx";
  DROP INDEX "pages__status_idx";
  DROP INDEX "pages_rels_order_idx";
  DROP INDEX "pages_rels_parent_idx";
  DROP INDEX "pages_rels_path_idx";
  DROP INDEX "pages_rels_pages_id_idx";
  DROP INDEX "pages_rels_posts_id_idx";
  DROP INDEX "pages_rels_categories_id_idx";
  DROP INDEX "_pages_v_parent_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_media_idx";
  DROP INDEX "_pages_v_version_meta_version_meta_image_idx";
  DROP INDEX "_pages_v_version_version_slug_idx";
  DROP INDEX "_pages_v_version_version_updated_at_idx";
  DROP INDEX "_pages_v_version_version_created_at_idx";
  DROP INDEX "_pages_v_version_version__status_idx";
  DROP INDEX "_pages_v_created_at_idx";
  DROP INDEX "_pages_v_updated_at_idx";
  DROP INDEX "_pages_v_latest_idx";
  DROP INDEX "_pages_v_autosave_idx";
  DROP INDEX "_pages_v_rels_order_idx";
  DROP INDEX "_pages_v_rels_parent_idx";
  DROP INDEX "_pages_v_rels_path_idx";
  DROP INDEX "_pages_v_rels_pages_id_idx";
  DROP INDEX "_pages_v_rels_posts_id_idx";
  DROP INDEX "_pages_v_rels_categories_id_idx";
  DROP INDEX "form_submissions_form_idx";
  DROP INDEX "form_submissions_updated_at_idx";
  DROP INDEX "form_submissions_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_pages_id_idx";
  DROP INDEX "payload_locked_documents_rels_roles_id_idx";
  ALTER TABLE "pages" ALTER COLUMN "leadership_title" SET DEFAULT 'Our Leadership';
  ALTER TABLE "pages" ALTER COLUMN "compliance_title" SET DEFAULT 'License & Regulatory Compliance';
  ALTER TABLE "_pages_v" ALTER COLUMN "version_leadership_title" SET DEFAULT 'Our Leadership';
  ALTER TABLE "_pages_v" ALTER COLUMN "version_compliance_title" SET DEFAULT 'License & Regulatory Compliance';
  ALTER TABLE "pages" ADD COLUMN "hero_title" varchar DEFAULT 'About Nepal Securities';
  ALTER TABLE "pages" ADD COLUMN "hero_description" varchar DEFAULT 'A trusted name in Nepal''s capital market, dedicated to empowering investors with professional brokerage services.';
  ALTER TABLE "pages" ADD COLUMN "who_we_are_title" varchar DEFAULT 'Who We Are';
  ALTER TABLE "pages" ADD COLUMN "who_we_are_content" jsonb;
  ALTER TABLE "pages" ADD COLUMN "commitment_title" varchar DEFAULT 'Our Commitment to You';
  ALTER TABLE "pages" ADD COLUMN "commitment_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "services_hero_title" varchar DEFAULT 'Our Services';
  ALTER TABLE "pages" ADD COLUMN "services_hero_description" varchar DEFAULT 'Comprehensive brokerage solutions tailored for the Nepali investor';
  ALTER TABLE "pages" ADD COLUMN "help_section_title" varchar DEFAULT 'Need Help Choosing?';
  ALTER TABLE "pages" ADD COLUMN "help_section_description" varchar DEFAULT 'Our team is here to help you understand our services and guide you through the account opening process.';
  ALTER TABLE "pages" ADD COLUMN "help_section_cta_text" varchar DEFAULT 'Contact Us';
  ALTER TABLE "pages" ADD COLUMN "help_section_cta_url" varchar DEFAULT '/contact';
  ALTER TABLE "pages" ADD COLUMN "disclaimer_title" varchar DEFAULT 'Important Disclaimer';
  ALTER TABLE "pages" ADD COLUMN "disclaimer_text" varchar DEFAULT 'We are a SEBON-licensed broker providing execution and support services only...';
  ALTER TABLE "pages" ADD COLUMN "contact_hero_title" varchar DEFAULT 'Contact Us';
  ALTER TABLE "pages" ADD COLUMN "contact_hero_description" varchar DEFAULT 'Get in touch with our team for any queries or assistance';
  ALTER TABLE "pages" ADD COLUMN "contact_form_title" varchar DEFAULT 'Send us a Message';
  ALTER TABLE "pages" ADD COLUMN "contact_form_id" integer;
  ALTER TABLE "pages" ADD COLUMN "contact_info_title" varchar DEFAULT 'Contact Information';
  ALTER TABLE "pages" ADD COLUMN "visit_office_title" varchar DEFAULT 'Visit Our Office';
  ALTER TABLE "pages" ADD COLUMN "visit_office_description" varchar DEFAULT 'We welcome you to visit our office for account opening, document submission, or any queries. Our team is ready to assist you.';
  ALTER TABLE "pages" ADD COLUMN "visit_office_map_url" varchar;
  ALTER TABLE "pages" ADD COLUMN "response_time_title" varchar DEFAULT 'Response Time';
  ALTER TABLE "pages" ADD COLUMN "response_time_description" varchar DEFAULT 'We strive to respond to all inquiries within 24-48 business hours. For urgent matters during trading hours, please call us directly.';
  ALTER TABLE "pages" ADD COLUMN "open_account_hero_title" varchar DEFAULT 'Open a Trading Account';
  ALTER TABLE "pages" ADD COLUMN "open_account_hero_description" varchar DEFAULT 'Start your investment journey with a simple, straightforward account opening process';
  ALTER TABLE "pages" ADD COLUMN "open_account_process_title" varchar DEFAULT 'Step-by-Step Process';
  ALTER TABLE "pages" ADD COLUMN "open_account_process_description" varchar DEFAULT 'Follow these simple steps to open your trading account and start investing in Nepal''s stock market';
  ALTER TABLE "pages" ADD COLUMN "downloads_title" varchar DEFAULT 'Download Forms';
  ALTER TABLE "pages" ADD COLUMN "downloads_description" varchar DEFAULT 'Download and review our account opening forms before your visit';
  ALTER TABLE "pages" ADD COLUMN "contact_title" varchar DEFAULT 'Have Questions?';
  ALTER TABLE "pages" ADD COLUMN "contact_description" varchar DEFAULT 'Our team is ready to help you through the account opening process. Contact us today!';
  ALTER TABLE "pages" ADD COLUMN "contact_cta_text" varchar DEFAULT 'Contact Us';
  ALTER TABLE "pages" ADD COLUMN "contact_cta_url" varchar DEFAULT '/contact';
  ALTER TABLE "pages" ADD COLUMN "learn_more_text" varchar DEFAULT 'Learn More';
  ALTER TABLE "pages" ADD COLUMN "learn_more_url" varchar DEFAULT '/education';
  ALTER TABLE "pages" ADD COLUMN "info_title" varchar DEFAULT 'Important Information';
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
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_title" varchar DEFAULT 'About Nepal Securities';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_description" varchar DEFAULT 'A trusted name in Nepal''s capital market, dedicated to empowering investors with professional brokerage services.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_who_we_are_title" varchar DEFAULT 'Who We Are';
  ALTER TABLE "_pages_v" ADD COLUMN "version_who_we_are_content" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_commitment_title" varchar DEFAULT 'Our Commitment to You';
  ALTER TABLE "_pages_v" ADD COLUMN "version_commitment_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_services_hero_title" varchar DEFAULT 'Our Services';
  ALTER TABLE "_pages_v" ADD COLUMN "version_services_hero_description" varchar DEFAULT 'Comprehensive brokerage solutions tailored for the Nepali investor';
  ALTER TABLE "_pages_v" ADD COLUMN "version_help_section_title" varchar DEFAULT 'Need Help Choosing?';
  ALTER TABLE "_pages_v" ADD COLUMN "version_help_section_description" varchar DEFAULT 'Our team is here to help you understand our services and guide you through the account opening process.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_help_section_cta_text" varchar DEFAULT 'Contact Us';
  ALTER TABLE "_pages_v" ADD COLUMN "version_help_section_cta_url" varchar DEFAULT '/contact';
  ALTER TABLE "_pages_v" ADD COLUMN "version_disclaimer_title" varchar DEFAULT 'Important Disclaimer';
  ALTER TABLE "_pages_v" ADD COLUMN "version_disclaimer_text" varchar DEFAULT 'We are a SEBON-licensed broker providing execution and support services only...';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_hero_title" varchar DEFAULT 'Contact Us';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_hero_description" varchar DEFAULT 'Get in touch with our team for any queries or assistance';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_form_title" varchar DEFAULT 'Send us a Message';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_form_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_info_title" varchar DEFAULT 'Contact Information';
  ALTER TABLE "_pages_v" ADD COLUMN "version_visit_office_title" varchar DEFAULT 'Visit Our Office';
  ALTER TABLE "_pages_v" ADD COLUMN "version_visit_office_description" varchar DEFAULT 'We welcome you to visit our office for account opening, document submission, or any queries. Our team is ready to assist you.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_visit_office_map_url" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_response_time_title" varchar DEFAULT 'Response Time';
  ALTER TABLE "_pages_v" ADD COLUMN "version_response_time_description" varchar DEFAULT 'We strive to respond to all inquiries within 24-48 business hours. For urgent matters during trading hours, please call us directly.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_open_account_hero_title" varchar DEFAULT 'Open a Trading Account';
  ALTER TABLE "_pages_v" ADD COLUMN "version_open_account_hero_description" varchar DEFAULT 'Start your investment journey with a simple, straightforward account opening process';
  ALTER TABLE "_pages_v" ADD COLUMN "version_open_account_process_title" varchar DEFAULT 'Step-by-Step Process';
  ALTER TABLE "_pages_v" ADD COLUMN "version_open_account_process_description" varchar DEFAULT 'Follow these simple steps to open your trading account and start investing in Nepal''s stock market';
  ALTER TABLE "_pages_v" ADD COLUMN "version_downloads_title" varchar DEFAULT 'Download Forms';
  ALTER TABLE "_pages_v" ADD COLUMN "version_downloads_description" varchar DEFAULT 'Download and review our account opening forms before your visit';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_title" varchar DEFAULT 'Have Questions?';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_description" varchar DEFAULT 'Our team is ready to help you through the account opening process. Contact us today!';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_cta_text" varchar DEFAULT 'Contact Us';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_cta_url" varchar DEFAULT '/contact';
  ALTER TABLE "_pages_v" ADD COLUMN "version_learn_more_text" varchar DEFAULT 'Learn More';
  ALTER TABLE "_pages_v" ADD COLUMN "version_learn_more_url" varchar DEFAULT '/education';
  ALTER TABLE "_pages_v" ADD COLUMN "version_info_title" varchar DEFAULT 'Important Information';
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
  ALTER TABLE "form_submissions" ADD COLUMN "name" varchar;
  ALTER TABLE "form_submissions" ADD COLUMN "email" varchar;
  ALTER TABLE "form_submissions" ADD COLUMN "phone" varchar;
  ALTER TABLE "form_submissions" ADD COLUMN "subject" varchar;
  ALTER TABLE "form_submissions" ADD COLUMN "message" varchar;
  ALTER TABLE "footer" ADD COLUMN "brand_company_name" varchar NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "brand_tagline" varchar;
  ALTER TABLE "footer" ADD COLUMN "brand_description" varchar;
  ALTER TABLE "footer" ADD COLUMN "contact_phone" varchar;
  ALTER TABLE "footer" ADD COLUMN "contact_email" varchar;
  ALTER TABLE "footer" ADD COLUMN "contact_address" varchar;
  ALTER TABLE "footer" ADD COLUMN "risk_disclaimer_title" varchar DEFAULT 'Risk Disclaimer';
  ALTER TABLE "footer" ADD COLUMN "risk_disclaimer_content" varchar;
  ALTER TABLE "footer" ADD COLUMN "bottom_copyright" varchar;
  ALTER TABLE "footer" ADD COLUMN "bottom_license_info" varchar;
  ALTER TABLE "pages_values" ADD CONSTRAINT "pages_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_licenses" ADD CONSTRAINT "pages_licenses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_leaders" ADD CONSTRAINT "pages_leaders_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_leaders" ADD CONSTRAINT "pages_leaders_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_service_blocks_features" ADD CONSTRAINT "pages_service_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_service_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_service_blocks_side_box_list" ADD CONSTRAINT "pages_service_blocks_side_box_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_service_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_service_blocks" ADD CONSTRAINT "pages_service_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_contact_methods" ADD CONSTRAINT "pages_contact_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_open_account_steps_items" ADD CONSTRAINT "pages_open_account_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_open_account_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_open_account_steps" ADD CONSTRAINT "pages_open_account_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_open_account_downloads" ADD CONSTRAINT "pages_open_account_downloads_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_info_items" ADD CONSTRAINT "pages_info_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_education_topics" ADD CONSTRAINT "pages_education_topics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_risk_items" ADD CONSTRAINT "pages_risk_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_investor_faqs" ADD CONSTRAINT "pages_investor_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_practices_dos" ADD CONSTRAINT "pages_practices_dos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_practices_donts" ADD CONSTRAINT "pages_practices_donts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_home_hero_features" ADD CONSTRAINT "pages_home_hero_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_home_trust_indicators" ADD CONSTRAINT "pages_home_trust_indicators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_home_service_previews" ADD CONSTRAINT "pages_home_service_previews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_values" ADD CONSTRAINT "_pages_v_version_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_licenses" ADD CONSTRAINT "_pages_v_version_licenses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_leaders" ADD CONSTRAINT "_pages_v_version_leaders_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_version_leaders" ADD CONSTRAINT "_pages_v_version_leaders_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_service_blocks_features" ADD CONSTRAINT "_pages_v_version_service_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_service_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_service_blocks_side_box_list" ADD CONSTRAINT "_pages_v_version_service_blocks_side_box_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_service_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_service_blocks" ADD CONSTRAINT "_pages_v_version_service_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_contact_methods" ADD CONSTRAINT "_pages_v_version_contact_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_open_account_steps_items" ADD CONSTRAINT "_pages_v_version_open_account_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_open_account_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_open_account_steps" ADD CONSTRAINT "_pages_v_version_open_account_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_open_account_downloads" ADD CONSTRAINT "_pages_v_version_open_account_downloads_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_info_items" ADD CONSTRAINT "_pages_v_version_info_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_education_topics" ADD CONSTRAINT "_pages_v_version_education_topics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_risk_items" ADD CONSTRAINT "_pages_v_version_risk_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_investor_faqs" ADD CONSTRAINT "_pages_v_version_investor_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_practices_dos" ADD CONSTRAINT "_pages_v_version_practices_dos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_practices_donts" ADD CONSTRAINT "_pages_v_version_practices_donts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_home_hero_features" ADD CONSTRAINT "_pages_v_version_home_hero_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_home_trust_indicators" ADD CONSTRAINT "_pages_v_version_home_trust_indicators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_home_service_previews" ADD CONSTRAINT "_pages_v_version_home_service_previews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_quick_links" ADD CONSTRAINT "footer_quick_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links" ADD CONSTRAINT "footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_office_phones" ADD CONSTRAINT "site_settings_office_phones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_office_emails" ADD CONSTRAINT "site_settings_office_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_office_office_hours" ADD CONSTRAINT "site_settings_office_office_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_branding_logo_id_media_id_fk" FOREIGN KEY ("branding_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "setting" ADD CONSTRAINT "setting_light_mode_icon_id_media_id_fk" FOREIGN KEY ("light_mode_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "setting" ADD CONSTRAINT "setting_light_mode_logo_id_media_id_fk" FOREIGN KEY ("light_mode_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "setting" ADD CONSTRAINT "setting_dark_mode_icon_id_media_id_fk" FOREIGN KEY ("dark_mode_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "setting" ADD CONSTRAINT "setting_dark_mode_logo_id_media_id_fk" FOREIGN KEY ("dark_mode_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_values_order_idx" ON "pages_values" USING btree ("_order");
  CREATE INDEX "pages_values_parent_id_idx" ON "pages_values" USING btree ("_parent_id");
  CREATE INDEX "pages_licenses_order_idx" ON "pages_licenses" USING btree ("_order");
  CREATE INDEX "pages_licenses_parent_id_idx" ON "pages_licenses" USING btree ("_parent_id");
  CREATE INDEX "pages_leaders_order_idx" ON "pages_leaders" USING btree ("_order");
  CREATE INDEX "pages_leaders_parent_id_idx" ON "pages_leaders" USING btree ("_parent_id");
  CREATE INDEX "pages_leaders_photo_6_idx" ON "pages_leaders" USING btree ("photo_id");
  CREATE INDEX "pages_service_blocks_features_order_idx" ON "pages_service_blocks_features" USING btree ("_order");
  CREATE INDEX "pages_service_blocks_features_parent_id_idx" ON "pages_service_blocks_features" USING btree ("_parent_id");
  CREATE INDEX "pages_service_blocks_side_box_list_order_idx" ON "pages_service_blocks_side_box_list" USING btree ("_order");
  CREATE INDEX "pages_service_blocks_side_box_list_parent_id_idx" ON "pages_service_blocks_side_box_list" USING btree ("_parent_id");
  CREATE INDEX "pages_service_blocks_order_idx" ON "pages_service_blocks" USING btree ("_order");
  CREATE INDEX "pages_service_blocks_parent_id_idx" ON "pages_service_blocks" USING btree ("_parent_id");
  CREATE INDEX "pages_contact_methods_order_idx" ON "pages_contact_methods" USING btree ("_order");
  CREATE INDEX "pages_contact_methods_parent_id_idx" ON "pages_contact_methods" USING btree ("_parent_id");
  CREATE INDEX "pages_open_account_steps_items_order_idx" ON "pages_open_account_steps_items" USING btree ("_order");
  CREATE INDEX "pages_open_account_steps_items_parent_id_idx" ON "pages_open_account_steps_items" USING btree ("_parent_id");
  CREATE INDEX "pages_open_account_steps_order_idx" ON "pages_open_account_steps" USING btree ("_order");
  CREATE INDEX "pages_open_account_steps_parent_id_idx" ON "pages_open_account_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_open_account_downloads_order_idx" ON "pages_open_account_downloads" USING btree ("_order");
  CREATE INDEX "pages_open_account_downloads_parent_id_idx" ON "pages_open_account_downloads" USING btree ("_parent_id");
  CREATE INDEX "pages_info_items_order_idx" ON "pages_info_items" USING btree ("_order");
  CREATE INDEX "pages_info_items_parent_id_idx" ON "pages_info_items" USING btree ("_parent_id");
  CREATE INDEX "pages_education_topics_order_idx" ON "pages_education_topics" USING btree ("_order");
  CREATE INDEX "pages_education_topics_parent_id_idx" ON "pages_education_topics" USING btree ("_parent_id");
  CREATE INDEX "pages_risk_items_order_idx" ON "pages_risk_items" USING btree ("_order");
  CREATE INDEX "pages_risk_items_parent_id_idx" ON "pages_risk_items" USING btree ("_parent_id");
  CREATE INDEX "pages_investor_faqs_order_idx" ON "pages_investor_faqs" USING btree ("_order");
  CREATE INDEX "pages_investor_faqs_parent_id_idx" ON "pages_investor_faqs" USING btree ("_parent_id");
  CREATE INDEX "pages_practices_dos_order_idx" ON "pages_practices_dos" USING btree ("_order");
  CREATE INDEX "pages_practices_dos_parent_id_idx" ON "pages_practices_dos" USING btree ("_parent_id");
  CREATE INDEX "pages_practices_donts_order_idx" ON "pages_practices_donts" USING btree ("_order");
  CREATE INDEX "pages_practices_donts_parent_id_idx" ON "pages_practices_donts" USING btree ("_parent_id");
  CREATE INDEX "pages_home_hero_features_order_idx" ON "pages_home_hero_features" USING btree ("_order");
  CREATE INDEX "pages_home_hero_features_parent_id_idx" ON "pages_home_hero_features" USING btree ("_parent_id");
  CREATE INDEX "pages_home_trust_indicators_order_idx" ON "pages_home_trust_indicators" USING btree ("_order");
  CREATE INDEX "pages_home_trust_indicators_parent_id_idx" ON "pages_home_trust_indicators" USING btree ("_parent_id");
  CREATE INDEX "pages_home_service_previews_order_idx" ON "pages_home_service_previews" USING btree ("_order");
  CREATE INDEX "pages_home_service_previews_parent_id_idx" ON "pages_home_service_previews" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_values_order_idx" ON "_pages_v_version_values" USING btree ("_order");
  CREATE INDEX "_pages_v_version_values_parent_id_idx" ON "_pages_v_version_values" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_licenses_order_idx" ON "_pages_v_version_licenses" USING btree ("_order");
  CREATE INDEX "_pages_v_version_licenses_parent_id_idx" ON "_pages_v_version_licenses" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_leaders_order_idx" ON "_pages_v_version_leaders" USING btree ("_order");
  CREATE INDEX "_pages_v_version_leaders_parent_id_idx" ON "_pages_v_version_leaders" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_leaders_photo_6_idx" ON "_pages_v_version_leaders" USING btree ("photo_id");
  CREATE INDEX "_pages_v_version_service_blocks_features_order_idx" ON "_pages_v_version_service_blocks_features" USING btree ("_order");
  CREATE INDEX "_pages_v_version_service_blocks_features_parent_id_idx" ON "_pages_v_version_service_blocks_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_service_blocks_side_box_list_order_idx" ON "_pages_v_version_service_blocks_side_box_list" USING btree ("_order");
  CREATE INDEX "_pages_v_version_service_blocks_side_box_list_parent_id_idx" ON "_pages_v_version_service_blocks_side_box_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_service_blocks_order_idx" ON "_pages_v_version_service_blocks" USING btree ("_order");
  CREATE INDEX "_pages_v_version_service_blocks_parent_id_idx" ON "_pages_v_version_service_blocks" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_contact_methods_order_idx" ON "_pages_v_version_contact_methods" USING btree ("_order");
  CREATE INDEX "_pages_v_version_contact_methods_parent_id_idx" ON "_pages_v_version_contact_methods" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_open_account_steps_items_order_idx" ON "_pages_v_version_open_account_steps_items" USING btree ("_order");
  CREATE INDEX "_pages_v_version_open_account_steps_items_parent_id_idx" ON "_pages_v_version_open_account_steps_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_open_account_steps_order_idx" ON "_pages_v_version_open_account_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_version_open_account_steps_parent_id_idx" ON "_pages_v_version_open_account_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_open_account_downloads_order_idx" ON "_pages_v_version_open_account_downloads" USING btree ("_order");
  CREATE INDEX "_pages_v_version_open_account_downloads_parent_id_idx" ON "_pages_v_version_open_account_downloads" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_info_items_order_idx" ON "_pages_v_version_info_items" USING btree ("_order");
  CREATE INDEX "_pages_v_version_info_items_parent_id_idx" ON "_pages_v_version_info_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_education_topics_order_idx" ON "_pages_v_version_education_topics" USING btree ("_order");
  CREATE INDEX "_pages_v_version_education_topics_parent_id_idx" ON "_pages_v_version_education_topics" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_risk_items_order_idx" ON "_pages_v_version_risk_items" USING btree ("_order");
  CREATE INDEX "_pages_v_version_risk_items_parent_id_idx" ON "_pages_v_version_risk_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_investor_faqs_order_idx" ON "_pages_v_version_investor_faqs" USING btree ("_order");
  CREATE INDEX "_pages_v_version_investor_faqs_parent_id_idx" ON "_pages_v_version_investor_faqs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_practices_dos_order_idx" ON "_pages_v_version_practices_dos" USING btree ("_order");
  CREATE INDEX "_pages_v_version_practices_dos_parent_id_idx" ON "_pages_v_version_practices_dos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_practices_donts_order_idx" ON "_pages_v_version_practices_donts" USING btree ("_order");
  CREATE INDEX "_pages_v_version_practices_donts_parent_id_idx" ON "_pages_v_version_practices_donts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_home_hero_features_order_idx" ON "_pages_v_version_home_hero_features" USING btree ("_order");
  CREATE INDEX "_pages_v_version_home_hero_features_parent_id_idx" ON "_pages_v_version_home_hero_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_home_trust_indicators_order_idx" ON "_pages_v_version_home_trust_indicators" USING btree ("_order");
  CREATE INDEX "_pages_v_version_home_trust_indicators_parent_id_idx" ON "_pages_v_version_home_trust_indicators" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_home_service_previews_order_idx" ON "_pages_v_version_home_service_previews" USING btree ("_order");
  CREATE INDEX "_pages_v_version_home_service_previews_parent_id_idx" ON "_pages_v_version_home_service_previews" USING btree ("_parent_id");
  CREATE INDEX "footer_quick_links_order_idx" ON "footer_quick_links" USING btree ("_order");
  CREATE INDEX "footer_quick_links_parent_id_idx" ON "footer_quick_links" USING btree ("_parent_id");
  CREATE INDEX "footer_legal_links_order_idx" ON "footer_legal_links" USING btree ("_order");
  CREATE INDEX "footer_legal_links_parent_id_idx" ON "footer_legal_links" USING btree ("_parent_id");
  CREATE INDEX "site_settings_office_phones_order_idx" ON "site_settings_office_phones" USING btree ("_order");
  CREATE INDEX "site_settings_office_phones_parent_id_idx" ON "site_settings_office_phones" USING btree ("_parent_id");
  CREATE INDEX "site_settings_office_emails_order_idx" ON "site_settings_office_emails" USING btree ("_order");
  CREATE INDEX "site_settings_office_emails_parent_id_idx" ON "site_settings_office_emails" USING btree ("_parent_id");
  CREATE INDEX "site_settings_office_office_hours_order_idx" ON "site_settings_office_office_hours" USING btree ("_order");
  CREATE INDEX "site_settings_office_office_hours_parent_id_idx" ON "site_settings_office_office_hours" USING btree ("_parent_id");
  CREATE INDEX "site_settings_branding_branding_logo_idx" ON "site_settings" USING btree ("branding_logo_id");
  CREATE INDEX "setting_light_mode_icon_idx" ON "setting" USING btree ("light_mode_icon_id");
  CREATE INDEX "setting_light_mode_logo_idx" ON "setting" USING btree ("light_mode_logo_id");
  CREATE INDEX "setting_dark_mode_icon_idx" ON "setting" USING btree ("dark_mode_icon_id");
  CREATE INDEX "setting_dark_mode_logo_idx" ON "setting" USING btree ("dark_mode_logo_id");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_contact_form_id_forms_id_fk" FOREIGN KEY ("contact_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_6_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_6_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_6_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_contact_form_id_forms_id_fk" FOREIGN KEY ("version_contact_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_6_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_6_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_6_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_hero_media_6_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_contact_form_6_idx" ON "pages" USING btree ("contact_form_id");
  CREATE INDEX "pages_meta_meta_image_6_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_6_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_6_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_6_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_6_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_6_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_6_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_6_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_6_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_6_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_parent_6_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_6_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_version_contact_form_6_idx" ON "_pages_v" USING btree ("version_contact_form_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_6_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_6_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_6_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_6_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_6_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_6_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_6_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_6_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_6_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_6_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_6_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_6_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_6_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_6_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "form_submissions_form_1_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_1_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_1_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_1_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  ALTER TABLE "pages" DROP COLUMN "about_header_title";
  ALTER TABLE "pages" DROP COLUMN "about_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "about_story_title";
  ALTER TABLE "pages" DROP COLUMN "about_story_content";
  ALTER TABLE "pages" DROP COLUMN "stat1_number";
  ALTER TABLE "pages" DROP COLUMN "stat1_label";
  ALTER TABLE "pages" DROP COLUMN "stat2_number";
  ALTER TABLE "pages" DROP COLUMN "stat2_label";
  ALTER TABLE "pages" DROP COLUMN "stat3_number";
  ALTER TABLE "pages" DROP COLUMN "stat3_label";
  ALTER TABLE "pages" DROP COLUMN "stat4_number";
  ALTER TABLE "pages" DROP COLUMN "stat4_label";
  ALTER TABLE "pages" DROP COLUMN "mission_icon";
  ALTER TABLE "pages" DROP COLUMN "mission_title";
  ALTER TABLE "pages" DROP COLUMN "mission_description";
  ALTER TABLE "pages" DROP COLUMN "vision_icon";
  ALTER TABLE "pages" DROP COLUMN "vision_title";
  ALTER TABLE "pages" DROP COLUMN "vision_description";
  ALTER TABLE "pages" DROP COLUMN "values_icon";
  ALTER TABLE "pages" DROP COLUMN "values_description";
  ALTER TABLE "pages" DROP COLUMN "directors_title";
  ALTER TABLE "pages" DROP COLUMN "directors_description";
  ALTER TABLE "pages" DROP COLUMN "leadership_description";
  ALTER TABLE "pages" DROP COLUMN "timeline_title";
  ALTER TABLE "pages" DROP COLUMN "timeline_description";
  ALTER TABLE "pages" DROP COLUMN "testimonials_title";
  ALTER TABLE "pages" DROP COLUMN "testimonials_description";
  ALTER TABLE "pages" DROP COLUMN "compliance_description";
  ALTER TABLE "pages" DROP COLUMN "badge1_text";
  ALTER TABLE "pages" DROP COLUMN "badge2_text";
  ALTER TABLE "pages" DROP COLUMN "badge3_text";
  ALTER TABLE "pages" DROP COLUMN "products_title";
  ALTER TABLE "pages" DROP COLUMN "products_description";
  ALTER TABLE "pages_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_about_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_about_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_about_story_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_about_story_content";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat1_number";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat1_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat2_number";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat2_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat3_number";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat3_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat4_number";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat4_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_mission_icon";
  ALTER TABLE "_pages_v" DROP COLUMN "version_mission_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_mission_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_vision_icon";
  ALTER TABLE "_pages_v" DROP COLUMN "version_vision_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_vision_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_values_icon";
  ALTER TABLE "_pages_v" DROP COLUMN "version_values_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_directors_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_directors_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_leadership_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_timeline_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_timeline_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_testimonials_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_testimonials_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_compliance_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_badge1_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_badge2_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_badge3_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_products_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_products_description";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "pages_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "roles_id";
  DROP TYPE "public"."enum_pages_products_stats_icon";
  DROP TYPE "public"."enum_pages_products_icon";
  DROP TYPE "public"."enum_pages_mission_icon";
  DROP TYPE "public"."enum_pages_vision_icon";
  DROP TYPE "public"."enum_pages_values_icon";
  DROP TYPE "public"."enum__pages_v_version_products_stats_icon";
  DROP TYPE "public"."enum__pages_v_version_products_icon";
  DROP TYPE "public"."enum__pages_v_version_mission_icon";
  DROP TYPE "public"."enum__pages_v_version_vision_icon";
  DROP TYPE "public"."enum__pages_v_version_values_icon";
  DROP TYPE "public"."enum_footer_nav_items_link_type";
  DROP TYPE "public"."enum_about_mission_icon";
  DROP TYPE "public"."enum_about_vision_icon";
  DROP TYPE "public"."enum_about_values_icon";
  DROP TYPE "public"."enum_services_products_stats_icon";
  DROP TYPE "public"."enum_services_products_icon";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_products_stats_icon" AS ENUM('Clock', 'Percent', 'CreditCard', 'CheckCircle');
  CREATE TYPE "public"."enum_pages_products_icon" AS ENUM('ShoppingCart', 'Car', 'Home', 'Briefcase', 'CreditCard');
  CREATE TYPE "public"."enum_pages_mission_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_pages_vision_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_pages_values_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum__pages_v_version_products_stats_icon" AS ENUM('Clock', 'Percent', 'CreditCard', 'CheckCircle');
  CREATE TYPE "public"."enum__pages_v_version_products_icon" AS ENUM('ShoppingCart', 'Car', 'Home', 'Briefcase', 'CreditCard');
  CREATE TYPE "public"."enum__pages_v_version_mission_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum__pages_v_version_vision_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum__pages_v_version_values_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_about_mission_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_about_vision_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_about_values_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_services_products_stats_icon" AS ENUM('Clock', 'Percent', 'CreditCard', 'CheckCircle');
  CREATE TYPE "public"."enum_services_products_icon" AS ENUM('ShoppingCart', 'Car', 'Home', 'Briefcase', 'CreditCard');
  CREATE TABLE "pages_directors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar,
  	"position" varchar,
  	"experience" varchar,
  	"education" varchar,
  	"specialization" varchar
  );
  
  CREATE TABLE "pages_leadership" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar,
  	"position" varchar,
  	"department" varchar,
  	"experience" varchar,
  	"expertise" varchar
  );
  
  CREATE TABLE "pages_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"event" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"location" varchar,
  	"rating" numeric DEFAULT 5,
  	"content" varchar,
  	"product" varchar
  );
  
  CREATE TABLE "pages_products_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"icon" "enum_pages_products_stats_icon" DEFAULT 'Clock'
  );
  
  CREATE TABLE "pages_products_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"icon" "enum_pages_products_icon" DEFAULT 'ShoppingCart',
  	"title" varchar,
  	"subtitle" varchar,
  	"cta_text" varchar DEFAULT 'Apply Now',
  	"secondary_cta_text" varchar DEFAULT 'Learn More'
  );
  
  CREATE TABLE "_pages_v_version_directors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar,
  	"position" varchar,
  	"experience" varchar,
  	"education" varchar,
  	"specialization" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_leadership" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar,
  	"position" varchar,
  	"department" varchar,
  	"experience" varchar,
  	"expertise" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"event" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"location" varchar,
  	"rating" numeric DEFAULT 5,
  	"content" varchar,
  	"product" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_products_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"icon" "enum__pages_v_version_products_stats_icon" DEFAULT 'Clock',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_products_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"icon" "enum__pages_v_version_products_icon" DEFAULT 'ShoppingCart',
  	"title" varchar,
  	"subtitle" varchar,
  	"cta_text" varchar DEFAULT 'Apply Now',
  	"secondary_cta_text" varchar DEFAULT 'Learn More',
  	"_uuid" varchar
  );
  
  CREATE TABLE "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "about_directors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer NOT NULL,
  	"name" varchar NOT NULL,
  	"position" varchar NOT NULL,
  	"experience" varchar,
  	"education" varchar,
  	"specialization" varchar
  );
  
  CREATE TABLE "about_leadership" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer NOT NULL,
  	"name" varchar NOT NULL,
  	"position" varchar NOT NULL,
  	"department" varchar,
  	"experience" varchar,
  	"expertise" varchar
  );
  
  CREATE TABLE "about_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL,
  	"event" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "about_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "about_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"location" varchar,
  	"rating" numeric DEFAULT 5,
  	"content" varchar NOT NULL,
  	"product" varchar
  );
  
  CREATE TABLE "about" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"about_header_title" varchar DEFAULT 'About Batas Hire and Purchase',
  	"about_header_subtitle" varchar DEFAULT 'We''re on a mission to make financial services more accessible...',
  	"about_story_title" varchar DEFAULT '22 Years of Growth in Financial Services',
  	"about_story_content" jsonb,
  	"stat1_number" varchar DEFAULT '50,000+',
  	"stat1_label" varchar DEFAULT 'Happy Customers',
  	"stat2_number" varchar DEFAULT '₹500 Cr+',
  	"stat2_label" varchar DEFAULT 'Loans Disbursed',
  	"stat3_number" varchar DEFAULT '99.2%',
  	"stat3_label" varchar DEFAULT 'Customer Satisfaction',
  	"stat4_number" varchar DEFAULT '15+',
  	"stat4_label" varchar DEFAULT 'Banking Partners',
  	"mission_icon" "enum_about_mission_icon" DEFAULT 'Target',
  	"mission_title" varchar DEFAULT 'Our Mission',
  	"mission_description" varchar,
  	"vision_icon" "enum_about_vision_icon" DEFAULT 'Eye',
  	"vision_title" varchar DEFAULT 'Our Vision',
  	"vision_description" varchar,
  	"values_icon" "enum_about_values_icon" DEFAULT 'Users',
  	"values_title" varchar DEFAULT 'Our Values',
  	"values_description" varchar,
  	"directors_title" varchar DEFAULT 'Board of Directors',
  	"directors_description" varchar DEFAULT 'Experienced leadership guiding our strategic vision',
  	"leadership_title" varchar DEFAULT 'Leadership Team',
  	"leadership_description" varchar DEFAULT 'Meet our executive team driving operational excellence',
  	"timeline_title" varchar DEFAULT '22 Years of Growth',
  	"timeline_description" varchar DEFAULT 'Our journey from inception to industry leadership',
  	"testimonials_title" varchar DEFAULT 'What Our Customers Say',
  	"testimonials_description" varchar DEFAULT 'Don''t just take our word for it. Hear from thousands of satisfied customers across India.',
  	"compliance_title" varchar DEFAULT 'Regulatory Compliance',
  	"compliance_description" varchar,
  	"badge1_text" varchar DEFAULT 'RBI Licensed NBFC',
  	"badge2_text" varchar DEFAULT 'ISO 27001 Certified',
  	"badge3_text" varchar DEFAULT 'PCI DSS Compliant',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "services_products_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"icon" "enum_services_products_stats_icon" DEFAULT 'Clock'
  );
  
  CREATE TABLE "services_products_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "services_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"icon" "enum_services_products_icon" DEFAULT 'ShoppingCart',
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"cta_text" varchar DEFAULT 'Apply Now',
  	"secondary_cta_text" varchar DEFAULT 'Learn More'
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"products_title" varchar DEFAULT 'Our Financial Solutions',
  	"products_description" varchar DEFAULT 'Tailored financing options to meet your diverse needs with transparent terms and competitive rates',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_values" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_licenses" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_leaders" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_service_blocks_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_service_blocks_side_box_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_service_blocks" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_contact_methods" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_open_account_steps_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_open_account_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_open_account_downloads" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_info_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_education_topics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_risk_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_investor_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_practices_dos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_practices_donts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_home_hero_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_home_trust_indicators" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_home_service_previews" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_values" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_licenses" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_leaders" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_service_blocks_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_service_blocks_side_box_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_service_blocks" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_contact_methods" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_open_account_steps_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_open_account_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_open_account_downloads" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_info_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_education_topics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_risk_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_investor_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_practices_dos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_practices_donts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_home_hero_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_home_trust_indicators" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_home_service_previews" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_quick_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_legal_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_office_phones" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_office_emails" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_office_office_hours" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "setting" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_values" CASCADE;
  DROP TABLE "pages_licenses" CASCADE;
  DROP TABLE "pages_leaders" CASCADE;
  DROP TABLE "pages_service_blocks_features" CASCADE;
  DROP TABLE "pages_service_blocks_side_box_list" CASCADE;
  DROP TABLE "pages_service_blocks" CASCADE;
  DROP TABLE "pages_contact_methods" CASCADE;
  DROP TABLE "pages_open_account_steps_items" CASCADE;
  DROP TABLE "pages_open_account_steps" CASCADE;
  DROP TABLE "pages_open_account_downloads" CASCADE;
  DROP TABLE "pages_info_items" CASCADE;
  DROP TABLE "pages_education_topics" CASCADE;
  DROP TABLE "pages_risk_items" CASCADE;
  DROP TABLE "pages_investor_faqs" CASCADE;
  DROP TABLE "pages_practices_dos" CASCADE;
  DROP TABLE "pages_practices_donts" CASCADE;
  DROP TABLE "pages_home_hero_features" CASCADE;
  DROP TABLE "pages_home_trust_indicators" CASCADE;
  DROP TABLE "pages_home_service_previews" CASCADE;
  DROP TABLE "_pages_v_version_values" CASCADE;
  DROP TABLE "_pages_v_version_licenses" CASCADE;
  DROP TABLE "_pages_v_version_leaders" CASCADE;
  DROP TABLE "_pages_v_version_service_blocks_features" CASCADE;
  DROP TABLE "_pages_v_version_service_blocks_side_box_list" CASCADE;
  DROP TABLE "_pages_v_version_service_blocks" CASCADE;
  DROP TABLE "_pages_v_version_contact_methods" CASCADE;
  DROP TABLE "_pages_v_version_open_account_steps_items" CASCADE;
  DROP TABLE "_pages_v_version_open_account_steps" CASCADE;
  DROP TABLE "_pages_v_version_open_account_downloads" CASCADE;
  DROP TABLE "_pages_v_version_info_items" CASCADE;
  DROP TABLE "_pages_v_version_education_topics" CASCADE;
  DROP TABLE "_pages_v_version_risk_items" CASCADE;
  DROP TABLE "_pages_v_version_investor_faqs" CASCADE;
  DROP TABLE "_pages_v_version_practices_dos" CASCADE;
  DROP TABLE "_pages_v_version_practices_donts" CASCADE;
  DROP TABLE "_pages_v_version_home_hero_features" CASCADE;
  DROP TABLE "_pages_v_version_home_trust_indicators" CASCADE;
  DROP TABLE "_pages_v_version_home_service_previews" CASCADE;
  DROP TABLE "footer_quick_links" CASCADE;
  DROP TABLE "footer_legal_links" CASCADE;
  DROP TABLE "site_settings_office_phones" CASCADE;
  DROP TABLE "site_settings_office_emails" CASCADE;
  DROP TABLE "site_settings_office_office_hours" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "setting" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_contact_form_id_forms_id_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_parent_6_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_pages_6_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_posts_6_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_contact_form_id_forms_id_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_parent_6_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_pages_6_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_posts_6_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk";
  
  ALTER TABLE "pages" ALTER COLUMN "template" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "template" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_pages_template";
  CREATE TYPE "public"."enum_pages_template" AS ENUM('default', 'about', 'services', 'home');
  ALTER TABLE "pages" ALTER COLUMN "template" SET DEFAULT 'default'::"public"."enum_pages_template";
  ALTER TABLE "pages" ALTER COLUMN "template" SET DATA TYPE "public"."enum_pages_template" USING "template"::"public"."enum_pages_template";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_template" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_template" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum__pages_v_version_template";
  CREATE TYPE "public"."enum__pages_v_version_template" AS ENUM('default', 'about', 'services', 'home');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_template" SET DEFAULT 'default'::"public"."enum__pages_v_version_template";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_template" SET DATA TYPE "public"."enum__pages_v_version_template" USING "version_template"::"public"."enum__pages_v_version_template";
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE text;
  DROP TYPE "public"."enum_roles_permissions_resource";
  CREATE TYPE "public"."enum_roles_permissions_resource" AS ENUM('pages', 'media', 'about', 'services');
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE "public"."enum_roles_permissions_resource" USING "resource"::"public"."enum_roles_permissions_resource";
  DROP INDEX "pages_hero_hero_media_6_idx";
  DROP INDEX "pages_contact_form_6_idx";
  DROP INDEX "pages_meta_meta_image_6_idx";
  DROP INDEX "pages_slug_6_idx";
  DROP INDEX "pages_updated_at_6_idx";
  DROP INDEX "pages_created_at_6_idx";
  DROP INDEX "pages__status_6_idx";
  DROP INDEX "pages_rels_order_6_idx";
  DROP INDEX "pages_rels_parent_6_idx";
  DROP INDEX "pages_rels_path_6_idx";
  DROP INDEX "pages_rels_pages_id_6_idx";
  DROP INDEX "pages_rels_posts_id_6_idx";
  DROP INDEX "_pages_v_parent_6_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_media_6_idx";
  DROP INDEX "_pages_v_version_version_contact_form_6_idx";
  DROP INDEX "_pages_v_version_meta_version_meta_image_6_idx";
  DROP INDEX "_pages_v_version_version_slug_6_idx";
  DROP INDEX "_pages_v_version_version_updated_at_6_idx";
  DROP INDEX "_pages_v_version_version_created_at_6_idx";
  DROP INDEX "_pages_v_version_version__status_6_idx";
  DROP INDEX "_pages_v_created_at_6_idx";
  DROP INDEX "_pages_v_updated_at_6_idx";
  DROP INDEX "_pages_v_latest_6_idx";
  DROP INDEX "_pages_v_autosave_6_idx";
  DROP INDEX "_pages_v_rels_order_6_idx";
  DROP INDEX "_pages_v_rels_parent_6_idx";
  DROP INDEX "_pages_v_rels_path_6_idx";
  DROP INDEX "_pages_v_rels_pages_id_6_idx";
  DROP INDEX "_pages_v_rels_posts_id_6_idx";
  DROP INDEX "form_submissions_form_1_idx";
  DROP INDEX "form_submissions_updated_at_1_idx";
  DROP INDEX "form_submissions_created_at_1_idx";
  DROP INDEX "payload_locked_documents_rels_form_submissions_id_1_idx";
  ALTER TABLE "pages" ALTER COLUMN "compliance_title" SET DEFAULT 'Regulatory Compliance';
  ALTER TABLE "pages" ALTER COLUMN "leadership_title" SET DEFAULT 'Leadership Team';
  ALTER TABLE "_pages_v" ALTER COLUMN "version_compliance_title" SET DEFAULT 'Regulatory Compliance';
  ALTER TABLE "_pages_v" ALTER COLUMN "version_leadership_title" SET DEFAULT 'Leadership Team';
  ALTER TABLE "pages" ADD COLUMN "about_header_title" varchar DEFAULT 'About Batas Hire and Purchase';
  ALTER TABLE "pages" ADD COLUMN "about_header_subtitle" varchar DEFAULT 'We''re on a mission to make financial services more accessible...';
  ALTER TABLE "pages" ADD COLUMN "about_story_title" varchar DEFAULT '22 Years of Growth in Financial Services';
  ALTER TABLE "pages" ADD COLUMN "about_story_content" jsonb;
  ALTER TABLE "pages" ADD COLUMN "stat1_number" varchar DEFAULT '50,000+';
  ALTER TABLE "pages" ADD COLUMN "stat1_label" varchar DEFAULT 'Happy Customers';
  ALTER TABLE "pages" ADD COLUMN "stat2_number" varchar DEFAULT '₹500 Cr+';
  ALTER TABLE "pages" ADD COLUMN "stat2_label" varchar DEFAULT 'Loans Disbursed';
  ALTER TABLE "pages" ADD COLUMN "stat3_number" varchar DEFAULT '99.2%';
  ALTER TABLE "pages" ADD COLUMN "stat3_label" varchar DEFAULT 'Customer Satisfaction';
  ALTER TABLE "pages" ADD COLUMN "stat4_number" varchar DEFAULT '15+';
  ALTER TABLE "pages" ADD COLUMN "stat4_label" varchar DEFAULT 'Banking Partners';
  ALTER TABLE "pages" ADD COLUMN "mission_icon" "enum_pages_mission_icon" DEFAULT 'Target';
  ALTER TABLE "pages" ADD COLUMN "mission_title" varchar DEFAULT 'Our Mission';
  ALTER TABLE "pages" ADD COLUMN "mission_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "vision_icon" "enum_pages_vision_icon" DEFAULT 'Eye';
  ALTER TABLE "pages" ADD COLUMN "vision_title" varchar DEFAULT 'Our Vision';
  ALTER TABLE "pages" ADD COLUMN "vision_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "values_icon" "enum_pages_values_icon" DEFAULT 'Users';
  ALTER TABLE "pages" ADD COLUMN "values_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "directors_title" varchar DEFAULT 'Board of Directors';
  ALTER TABLE "pages" ADD COLUMN "directors_description" varchar DEFAULT 'Experienced leadership guiding our strategic vision';
  ALTER TABLE "pages" ADD COLUMN "leadership_description" varchar DEFAULT 'Meet our executive team driving operational excellence';
  ALTER TABLE "pages" ADD COLUMN "timeline_title" varchar DEFAULT '22 Years of Growth';
  ALTER TABLE "pages" ADD COLUMN "timeline_description" varchar DEFAULT 'Our journey from inception to industry leadership';
  ALTER TABLE "pages" ADD COLUMN "testimonials_title" varchar DEFAULT 'What Our Customers Say';
  ALTER TABLE "pages" ADD COLUMN "testimonials_description" varchar DEFAULT 'Don''t just take our word for it. Hear from thousands of satisfied customers across India.';
  ALTER TABLE "pages" ADD COLUMN "compliance_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "badge1_text" varchar DEFAULT 'RBI Licensed NBFC';
  ALTER TABLE "pages" ADD COLUMN "badge2_text" varchar DEFAULT 'ISO 27001 Certified';
  ALTER TABLE "pages" ADD COLUMN "badge3_text" varchar DEFAULT 'PCI DSS Compliant';
  ALTER TABLE "pages" ADD COLUMN "products_title" varchar DEFAULT 'Our Financial Solutions';
  ALTER TABLE "pages" ADD COLUMN "products_description" varchar DEFAULT 'Tailored financing options to meet your diverse needs with transparent terms and competitive rates';
  ALTER TABLE "pages_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_about_header_title" varchar DEFAULT 'About Batas Hire and Purchase';
  ALTER TABLE "_pages_v" ADD COLUMN "version_about_header_subtitle" varchar DEFAULT 'We''re on a mission to make financial services more accessible...';
  ALTER TABLE "_pages_v" ADD COLUMN "version_about_story_title" varchar DEFAULT '22 Years of Growth in Financial Services';
  ALTER TABLE "_pages_v" ADD COLUMN "version_about_story_content" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat1_number" varchar DEFAULT '50,000+';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat1_label" varchar DEFAULT 'Happy Customers';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat2_number" varchar DEFAULT '₹500 Cr+';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat2_label" varchar DEFAULT 'Loans Disbursed';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat3_number" varchar DEFAULT '99.2%';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat3_label" varchar DEFAULT 'Customer Satisfaction';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat4_number" varchar DEFAULT '15+';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat4_label" varchar DEFAULT 'Banking Partners';
  ALTER TABLE "_pages_v" ADD COLUMN "version_mission_icon" "enum__pages_v_version_mission_icon" DEFAULT 'Target';
  ALTER TABLE "_pages_v" ADD COLUMN "version_mission_title" varchar DEFAULT 'Our Mission';
  ALTER TABLE "_pages_v" ADD COLUMN "version_mission_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_vision_icon" "enum__pages_v_version_vision_icon" DEFAULT 'Eye';
  ALTER TABLE "_pages_v" ADD COLUMN "version_vision_title" varchar DEFAULT 'Our Vision';
  ALTER TABLE "_pages_v" ADD COLUMN "version_vision_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_values_icon" "enum__pages_v_version_values_icon" DEFAULT 'Users';
  ALTER TABLE "_pages_v" ADD COLUMN "version_values_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_directors_title" varchar DEFAULT 'Board of Directors';
  ALTER TABLE "_pages_v" ADD COLUMN "version_directors_description" varchar DEFAULT 'Experienced leadership guiding our strategic vision';
  ALTER TABLE "_pages_v" ADD COLUMN "version_leadership_description" varchar DEFAULT 'Meet our executive team driving operational excellence';
  ALTER TABLE "_pages_v" ADD COLUMN "version_timeline_title" varchar DEFAULT '22 Years of Growth';
  ALTER TABLE "_pages_v" ADD COLUMN "version_timeline_description" varchar DEFAULT 'Our journey from inception to industry leadership';
  ALTER TABLE "_pages_v" ADD COLUMN "version_testimonials_title" varchar DEFAULT 'What Our Customers Say';
  ALTER TABLE "_pages_v" ADD COLUMN "version_testimonials_description" varchar DEFAULT 'Don''t just take our word for it. Hear from thousands of satisfied customers across India.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_compliance_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_badge1_text" varchar DEFAULT 'RBI Licensed NBFC';
  ALTER TABLE "_pages_v" ADD COLUMN "version_badge2_text" varchar DEFAULT 'ISO 27001 Certified';
  ALTER TABLE "_pages_v" ADD COLUMN "version_badge3_text" varchar DEFAULT 'PCI DSS Compliant';
  ALTER TABLE "_pages_v" ADD COLUMN "version_products_title" varchar DEFAULT 'Our Financial Solutions';
  ALTER TABLE "_pages_v" ADD COLUMN "version_products_description" varchar DEFAULT 'Tailored financing options to meet your diverse needs with transparent terms and competitive rates';
  ALTER TABLE "_pages_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "roles_id" integer;
  ALTER TABLE "pages_directors" ADD CONSTRAINT "pages_directors_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_directors" ADD CONSTRAINT "pages_directors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_leadership" ADD CONSTRAINT "pages_leadership_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_leadership" ADD CONSTRAINT "pages_leadership_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_timeline" ADD CONSTRAINT "pages_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_stats" ADD CONSTRAINT "pages_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_testimonials" ADD CONSTRAINT "pages_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_products_stats" ADD CONSTRAINT "pages_products_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_products_features" ADD CONSTRAINT "pages_products_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_products" ADD CONSTRAINT "pages_products_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_products" ADD CONSTRAINT "pages_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_directors" ADD CONSTRAINT "_pages_v_version_directors_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_version_directors" ADD CONSTRAINT "_pages_v_version_directors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_leadership" ADD CONSTRAINT "_pages_v_version_leadership_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_version_leadership" ADD CONSTRAINT "_pages_v_version_leadership_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_timeline" ADD CONSTRAINT "_pages_v_version_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_stats" ADD CONSTRAINT "_pages_v_version_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_testimonials" ADD CONSTRAINT "_pages_v_version_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_products_stats" ADD CONSTRAINT "_pages_v_version_products_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_products_features" ADD CONSTRAINT "_pages_v_version_products_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_products" ADD CONSTRAINT "_pages_v_version_products_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_version_products" ADD CONSTRAINT "_pages_v_version_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_directors" ADD CONSTRAINT "about_directors_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_directors" ADD CONSTRAINT "about_directors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_leadership" ADD CONSTRAINT "about_leadership_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_leadership" ADD CONSTRAINT "about_leadership_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_timeline" ADD CONSTRAINT "about_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_stats" ADD CONSTRAINT "about_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_testimonials" ADD CONSTRAINT "about_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_products_stats" ADD CONSTRAINT "services_products_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_products_features" ADD CONSTRAINT "services_products_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_products" ADD CONSTRAINT "services_products_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_products" ADD CONSTRAINT "services_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_directors_order_idx" ON "pages_directors" USING btree ("_order");
  CREATE INDEX "pages_directors_parent_id_idx" ON "pages_directors" USING btree ("_parent_id");
  CREATE INDEX "pages_directors_photo_idx" ON "pages_directors" USING btree ("photo_id");
  CREATE INDEX "pages_leadership_order_idx" ON "pages_leadership" USING btree ("_order");
  CREATE INDEX "pages_leadership_parent_id_idx" ON "pages_leadership" USING btree ("_parent_id");
  CREATE INDEX "pages_leadership_photo_idx" ON "pages_leadership" USING btree ("photo_id");
  CREATE INDEX "pages_timeline_order_idx" ON "pages_timeline" USING btree ("_order");
  CREATE INDEX "pages_timeline_parent_id_idx" ON "pages_timeline" USING btree ("_parent_id");
  CREATE INDEX "pages_stats_order_idx" ON "pages_stats" USING btree ("_order");
  CREATE INDEX "pages_stats_parent_id_idx" ON "pages_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_testimonials_order_idx" ON "pages_testimonials" USING btree ("_order");
  CREATE INDEX "pages_testimonials_parent_id_idx" ON "pages_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_products_stats_order_idx" ON "pages_products_stats" USING btree ("_order");
  CREATE INDEX "pages_products_stats_parent_id_idx" ON "pages_products_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_products_features_order_idx" ON "pages_products_features" USING btree ("_order");
  CREATE INDEX "pages_products_features_parent_id_idx" ON "pages_products_features" USING btree ("_parent_id");
  CREATE INDEX "pages_products_order_idx" ON "pages_products" USING btree ("_order");
  CREATE INDEX "pages_products_parent_id_idx" ON "pages_products" USING btree ("_parent_id");
  CREATE INDEX "pages_products_image_idx" ON "pages_products" USING btree ("image_id");
  CREATE INDEX "_pages_v_version_directors_order_idx" ON "_pages_v_version_directors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_directors_parent_id_idx" ON "_pages_v_version_directors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_directors_photo_idx" ON "_pages_v_version_directors" USING btree ("photo_id");
  CREATE INDEX "_pages_v_version_leadership_order_idx" ON "_pages_v_version_leadership" USING btree ("_order");
  CREATE INDEX "_pages_v_version_leadership_parent_id_idx" ON "_pages_v_version_leadership" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_leadership_photo_idx" ON "_pages_v_version_leadership" USING btree ("photo_id");
  CREATE INDEX "_pages_v_version_timeline_order_idx" ON "_pages_v_version_timeline" USING btree ("_order");
  CREATE INDEX "_pages_v_version_timeline_parent_id_idx" ON "_pages_v_version_timeline" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_stats_order_idx" ON "_pages_v_version_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_version_stats_parent_id_idx" ON "_pages_v_version_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_testimonials_order_idx" ON "_pages_v_version_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_version_testimonials_parent_id_idx" ON "_pages_v_version_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_products_stats_order_idx" ON "_pages_v_version_products_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_version_products_stats_parent_id_idx" ON "_pages_v_version_products_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_products_features_order_idx" ON "_pages_v_version_products_features" USING btree ("_order");
  CREATE INDEX "_pages_v_version_products_features_parent_id_idx" ON "_pages_v_version_products_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_products_order_idx" ON "_pages_v_version_products" USING btree ("_order");
  CREATE INDEX "_pages_v_version_products_parent_id_idx" ON "_pages_v_version_products" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_products_image_idx" ON "_pages_v_version_products" USING btree ("image_id");
  CREATE INDEX "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX "about_directors_order_idx" ON "about_directors" USING btree ("_order");
  CREATE INDEX "about_directors_parent_id_idx" ON "about_directors" USING btree ("_parent_id");
  CREATE INDEX "about_directors_photo_idx" ON "about_directors" USING btree ("photo_id");
  CREATE INDEX "about_leadership_order_idx" ON "about_leadership" USING btree ("_order");
  CREATE INDEX "about_leadership_parent_id_idx" ON "about_leadership" USING btree ("_parent_id");
  CREATE INDEX "about_leadership_photo_idx" ON "about_leadership" USING btree ("photo_id");
  CREATE INDEX "about_timeline_order_idx" ON "about_timeline" USING btree ("_order");
  CREATE INDEX "about_timeline_parent_id_idx" ON "about_timeline" USING btree ("_parent_id");
  CREATE INDEX "about_stats_order_idx" ON "about_stats" USING btree ("_order");
  CREATE INDEX "about_stats_parent_id_idx" ON "about_stats" USING btree ("_parent_id");
  CREATE INDEX "about_testimonials_order_idx" ON "about_testimonials" USING btree ("_order");
  CREATE INDEX "about_testimonials_parent_id_idx" ON "about_testimonials" USING btree ("_parent_id");
  CREATE INDEX "services_products_stats_order_idx" ON "services_products_stats" USING btree ("_order");
  CREATE INDEX "services_products_stats_parent_id_idx" ON "services_products_stats" USING btree ("_parent_id");
  CREATE INDEX "services_products_features_order_idx" ON "services_products_features" USING btree ("_order");
  CREATE INDEX "services_products_features_parent_id_idx" ON "services_products_features" USING btree ("_parent_id");
  CREATE INDEX "services_products_order_idx" ON "services_products" USING btree ("_order");
  CREATE INDEX "services_products_parent_id_idx" ON "services_products" USING btree ("_parent_id");
  CREATE INDEX "services_products_image_idx" ON "services_products" USING btree ("image_id");
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_roles_fk" FOREIGN KEY ("roles_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_roles_id_idx" ON "payload_locked_documents_rels" USING btree ("roles_id");
  ALTER TABLE "pages" DROP COLUMN "hero_title";
  ALTER TABLE "pages" DROP COLUMN "hero_description";
  ALTER TABLE "pages" DROP COLUMN "who_we_are_title";
  ALTER TABLE "pages" DROP COLUMN "who_we_are_content";
  ALTER TABLE "pages" DROP COLUMN "commitment_title";
  ALTER TABLE "pages" DROP COLUMN "commitment_description";
  ALTER TABLE "pages" DROP COLUMN "services_hero_title";
  ALTER TABLE "pages" DROP COLUMN "services_hero_description";
  ALTER TABLE "pages" DROP COLUMN "help_section_title";
  ALTER TABLE "pages" DROP COLUMN "help_section_description";
  ALTER TABLE "pages" DROP COLUMN "help_section_cta_text";
  ALTER TABLE "pages" DROP COLUMN "help_section_cta_url";
  ALTER TABLE "pages" DROP COLUMN "disclaimer_title";
  ALTER TABLE "pages" DROP COLUMN "disclaimer_text";
  ALTER TABLE "pages" DROP COLUMN "contact_hero_title";
  ALTER TABLE "pages" DROP COLUMN "contact_hero_description";
  ALTER TABLE "pages" DROP COLUMN "contact_form_title";
  ALTER TABLE "pages" DROP COLUMN "contact_form_id";
  ALTER TABLE "pages" DROP COLUMN "contact_info_title";
  ALTER TABLE "pages" DROP COLUMN "visit_office_title";
  ALTER TABLE "pages" DROP COLUMN "visit_office_description";
  ALTER TABLE "pages" DROP COLUMN "visit_office_map_url";
  ALTER TABLE "pages" DROP COLUMN "response_time_title";
  ALTER TABLE "pages" DROP COLUMN "response_time_description";
  ALTER TABLE "pages" DROP COLUMN "open_account_hero_title";
  ALTER TABLE "pages" DROP COLUMN "open_account_hero_description";
  ALTER TABLE "pages" DROP COLUMN "open_account_process_title";
  ALTER TABLE "pages" DROP COLUMN "open_account_process_description";
  ALTER TABLE "pages" DROP COLUMN "downloads_title";
  ALTER TABLE "pages" DROP COLUMN "downloads_description";
  ALTER TABLE "pages" DROP COLUMN "contact_title";
  ALTER TABLE "pages" DROP COLUMN "contact_description";
  ALTER TABLE "pages" DROP COLUMN "contact_cta_text";
  ALTER TABLE "pages" DROP COLUMN "contact_cta_url";
  ALTER TABLE "pages" DROP COLUMN "learn_more_text";
  ALTER TABLE "pages" DROP COLUMN "learn_more_url";
  ALTER TABLE "pages" DROP COLUMN "info_title";
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
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_who_we_are_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_who_we_are_content";
  ALTER TABLE "_pages_v" DROP COLUMN "version_commitment_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_commitment_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_services_hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_services_hero_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_help_section_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_help_section_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_help_section_cta_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_help_section_cta_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_disclaimer_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_disclaimer_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_hero_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_form_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_form_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_info_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_visit_office_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_visit_office_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_visit_office_map_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_response_time_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_response_time_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_open_account_hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_open_account_hero_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_open_account_process_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_open_account_process_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_downloads_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_downloads_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_cta_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_cta_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_learn_more_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_learn_more_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_info_title";
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
  ALTER TABLE "form_submissions" DROP COLUMN "name";
  ALTER TABLE "form_submissions" DROP COLUMN "email";
  ALTER TABLE "form_submissions" DROP COLUMN "phone";
  ALTER TABLE "form_submissions" DROP COLUMN "subject";
  ALTER TABLE "form_submissions" DROP COLUMN "message";
  ALTER TABLE "footer" DROP COLUMN "brand_company_name";
  ALTER TABLE "footer" DROP COLUMN "brand_tagline";
  ALTER TABLE "footer" DROP COLUMN "brand_description";
  ALTER TABLE "footer" DROP COLUMN "contact_phone";
  ALTER TABLE "footer" DROP COLUMN "contact_email";
  ALTER TABLE "footer" DROP COLUMN "contact_address";
  ALTER TABLE "footer" DROP COLUMN "risk_disclaimer_title";
  ALTER TABLE "footer" DROP COLUMN "risk_disclaimer_content";
  ALTER TABLE "footer" DROP COLUMN "bottom_copyright";
  ALTER TABLE "footer" DROP COLUMN "bottom_license_info";
  DROP TYPE "public"."enum_pages_service_blocks_side_box_type";
  DROP TYPE "public"."enum_pages_education_topics_theme";
  DROP TYPE "public"."enum__pages_v_version_service_blocks_side_box_type";
  DROP TYPE "public"."enum__pages_v_version_education_topics_theme";
  DROP TYPE "public"."enum_site_settings_office_phones_type";
  DROP TYPE "public"."enum_site_settings_office_emails_type";`)
}
