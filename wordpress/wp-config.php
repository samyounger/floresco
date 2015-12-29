<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'floresco');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!kN,y*OTNfngELt |qHZ@|EYvcAD;LzO#/>|-aQG=2yyFTxrjbDCK#k;+++n]-[D');
define('SECURE_AUTH_KEY',  'WeVDx74N00nZVjceHLInXK=FIz1umVquva5N(`7DD+>%&z-+*rJVTcD?L[ Xu7G%');
define('LOGGED_IN_KEY',    't[/~-BMyOZ#M!PN?r1B<_+(e<6aNI/)t{SOulr6xf+wYP;l4NeSV1)0C/:J4yZ|w');
define('NONCE_KEY',        'EBRCL*Hm[P%yM=);VmCyxQ;c>lIEfJ2-e s{.Oz_paZ-V^q,AF3-@_K-R7}wf@_v');
define('AUTH_SALT',        'pim+OyJ#8>,^#0eUcf>5+Hcf1:i-:P5i}gFhl nfqa?+V9&Tm9Ju-KtDp;pEf[?k');
define('SECURE_AUTH_SALT', 'h/c&(7+sm-M-^+iQ+SNmP?d)n7`cYJPuRm=fPw]sjOICV[{>/yfEjc* `):TR}pq');
define('LOGGED_IN_SALT',   'k])^jgl)/OCGKI7v[[6vdm*$>#NW:V-{4h3x~32=),<p4tSo*}f*a/ZL7eDk+ZQn');
define('NONCE_SALT',       'd#rlNO|*EG+Ld9.EcYi;;,b_O0vnotG`P-h b~z+i[PZM0fE2@2)`pCXq?&R4-oK');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
