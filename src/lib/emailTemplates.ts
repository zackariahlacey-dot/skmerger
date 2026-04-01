/* ─── Shared branded email layout ─────────────────────────────────────── */
function wrap(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0c2340;border-radius:12px 12px 0 0;padding:28px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;color:#ffffff;font-size:17px;font-weight:700;letter-spacing:-0.3px;">Sheldon Kirk</p>
                  <p style="margin:4px 0 0;color:#7eb8f7;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">SK Mergers &amp; Acquisitions · eXp Commercial</p>
                </td>
                <td align="right">
                  <p style="margin:0;color:#7eb8f7;font-size:11px;letter-spacing:1px;text-transform:uppercase;">skmergers.com</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Title bar -->
        <tr>
          <td style="background:#1a3a5c;padding:16px 36px;">
            <p style="margin:0;color:#60b4ff;font-size:13px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">${title}</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px 36px;border-radius:0 0 12px 12px;">
            ${body}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 36px 0;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:11px;">
              Sheldon Kirk &nbsp;·&nbsp; <a href="tel:7272348296" style="color:#94a3b8;">727-234-8296</a> &nbsp;·&nbsp;
              <a href="mailto:skmergers@gmail.com" style="color:#94a3b8;">skmergers@gmail.com</a>
            </p>
            <p style="margin:6px 0 0;color:#cbd5e1;font-size:10px;">© ${new Date().getFullYear()} SK Mergers &amp; Acquisitions. All rights reserved.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `
  <tr>
    <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
      <p style="margin:0;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">${label}</p>
      <p style="margin:4px 0 0;color:#1e293b;font-size:14px;line-height:1.6;">${value}</p>
    </td>
  </tr>`;
}

function dataTable(rows: string): string {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">${rows}</table>`;
}

function divider(): string {
  return `<hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />`;
}

function callout(text: string): string {
  return `<div style="background:#eff6ff;border-left:4px solid #1e90ff;border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:24px;">
    <p style="margin:0;color:#1e3a5f;font-size:14px;line-height:1.6;">${text}</p>
  </div>`;
}

/* ─── Contact Form ─────────────────────────────────────────────────────── */
export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function contactAdminEmail(p: ContactPayload): string {
  return wrap("New Contact Form Submission", `
    <h2 style="margin:0 0 4px;color:#0c2340;font-size:20px;font-weight:700;">New Inquiry</h2>
    <p style="margin:0 0 24px;color:#64748b;font-size:14px;">A visitor submitted the contact form on skmergers.com.</p>
    ${dataTable(
      row("Name", p.name) +
      row("Email", `<a href="mailto:${p.email}" style="color:#1e90ff;">${p.email}</a>`) +
      row("Phone", p.phone || "—") +
      row("Message", p.message.replace(/\n/g, "<br>"))
    )}
    ${callout(`Reply directly to this email or call ${p.phone || "them"} to follow up.`)}
  `);
}

export function contactConfirmEmail(p: ContactPayload): string {
  return wrap("We received your message", `
    <h2 style="margin:0 0 4px;color:#0c2340;font-size:20px;font-weight:700;">Thanks for reaching out, ${p.name.split(" ")[0]}!</h2>
    <p style="margin:0 0 20px;color:#475569;font-size:14px;line-height:1.7;">
      Sheldon received your message and will personally follow up within <strong>24 hours</strong>.
      In the meantime, feel free to call or text him directly.
    </p>
    ${divider()}
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="50%" style="padding-right:12px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;">
            <p style="margin:0 0 4px;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Call or Text</p>
            <a href="tel:7272348296" style="color:#1e90ff;font-size:16px;font-weight:700;text-decoration:none;">727-234-8296</a>
          </div>
        </td>
        <td width="50%" style="padding-left:12px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;">
            <p style="margin:0 0 4px;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
            <a href="mailto:skmergers@gmail.com" style="color:#1e90ff;font-size:15px;font-weight:700;text-decoration:none;">skmergers@gmail.com</a>
          </div>
        </td>
      </tr>
    </table>
    ${divider()}
    <p style="margin:0;color:#94a3b8;font-size:12px;text-align:center;">
      Pinch A Penny Pool Store Resale Specialist &nbsp;·&nbsp; FL · TX · AZ · GA · LA · AL · NC · NV
    </p>
  `);
}

/* ─── Buyer Form ───────────────────────────────────────────────────────── */
export interface BuyerPayload {
  name: string;
  email: string;
  states: string[];
  areaNote?: string;
}

export function buyerAdminEmail(p: BuyerPayload): string {
  const stateList = p.states.filter((s) => s !== "Any State").join(", ") || "Any / All States";
  const anyState = p.states.includes("Any State");
  return wrap("New Buyer Lead", `
    <h2 style="margin:0 0 4px;color:#0c2340;font-size:20px;font-weight:700;">New Buyer on the Alert List</h2>
    <p style="margin:0 0 24px;color:#64748b;font-size:14px;">A prospective buyer signed up to be notified of new listings.</p>
    ${dataTable(
      row("Name", p.name) +
      row("Email", `<a href="mailto:${p.email}" style="color:#1e90ff;">${p.email}</a>`) +
      row("States of Interest", anyState ? "Any / All States" : stateList) +
      row("Specific Area Notes", p.areaNote || "—")
    )}
    ${callout(`Send ${p.name.split(" ")[0]} a personal note confirming they're on your list — it goes a long way.`)}
  `);
}

export function buyerConfirmEmail(p: BuyerPayload): string {
  const stateList = p.states.includes("Any State")
    ? "all available states"
    : p.states.filter((s) => s !== "Any State").join(", ");
  return wrap("You're on the buyer alert list!", `
    <h2 style="margin:0 0 4px;color:#0c2340;font-size:20px;font-weight:700;">You're on Sheldon's radar, ${p.name.split(" ")[0]}!</h2>
    <p style="margin:0 0 20px;color:#475569;font-size:14px;line-height:1.7;">
      As soon as a Pinch-A-Penny listing becomes available in <strong>${stateList}</strong>,
      Sheldon will contact you personally — before it hits the open market.
    </p>
    ${p.areaNote ? callout(`<strong>Your location note:</strong> "${p.areaNote}"<br>Sheldon noted this and will keep it in mind.`) : ""}
    ${divider()}
    <p style="margin:0 0 12px;color:#1e293b;font-size:14px;font-weight:600;">In the meantime…</p>
    <p style="margin:0 0 20px;color:#475569;font-size:14px;line-height:1.7;">
      Browse currently available listings at
      <a href="https://skmergers.com" style="color:#1e90ff;font-weight:600;">skmergers.com</a>
      or reach out directly:
    </p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="50%" style="padding-right:12px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;">
            <p style="margin:0 0 4px;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Call or Text</p>
            <a href="tel:7272348296" style="color:#1e90ff;font-size:16px;font-weight:700;text-decoration:none;">727-234-8296</a>
          </div>
        </td>
        <td width="50%" style="padding-left:12px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;">
            <p style="margin:0 0 4px;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
            <a href="mailto:skmergers@gmail.com" style="color:#1e90ff;font-size:15px;font-weight:700;text-decoration:none;">skmergers@gmail.com</a>
          </div>
        </td>
      </tr>
    </table>
    ${divider()}
    <p style="margin:0;color:#94a3b8;font-size:12px;text-align:center;">
      Pinch A Penny Pool Store Resale Specialist &nbsp;·&nbsp; FL · TX · AZ · GA · LA · AL · NC · NV
    </p>
  `);
}

/* ─── Seller Form ──────────────────────────────────────────────────────── */
export interface SellerPayload {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  message: string;
}

export function sellerAdminEmail(p: SellerPayload): string {
  return wrap("New Seller Inquiry", `
    <h2 style="margin:0 0 4px;color:#0c2340;font-size:20px;font-weight:700;">Store Owner Wants to Sell</h2>
    <p style="margin:0 0 24px;color:#64748b;font-size:14px;">A Pinch-A-Penny owner submitted a seller inquiry on skmergers.com.</p>
    ${dataTable(
      row("Name", p.name) +
      row("Email", `<a href="mailto:${p.email}" style="color:#1e90ff;">${p.email}</a>`) +
      row("Phone", p.phone || "—") +
      row("Store Location", p.location || "—") +
      row("Their Message", p.message.replace(/\n/g, "<br>"))
    )}
    ${callout(`Follow up within 24 hours while their interest is hot. A quick call to ${p.name.split(" ")[0]} can lock in an exclusive listing.`)}
  `);
}

export function sellerConfirmEmail(p: SellerPayload): string {
  return wrap("Sheldon will be in touch shortly", `
    <h2 style="margin:0 0 4px;color:#0c2340;font-size:20px;font-weight:700;">Got it, ${p.name.split(" ")[0]} — you're in good hands.</h2>
    <p style="margin:0 0 20px;color:#475569;font-size:14px;line-height:1.7;">
      Sheldon received your inquiry and will reach out within <strong>24 hours</strong> to walk you through the
      valuation and listing process. With 15+ years in pool store resales, he knows exactly what
      it takes to get you the best outcome.
    </p>
    ${p.location ? callout(`We noted your store is located at <strong>${p.location}</strong>. Sheldon will research comparable sales in your market before reaching out.`) : ""}
    ${divider()}
    <p style="margin:0 0 12px;color:#1e293b;font-size:14px;font-weight:600;">Can't wait? Reach Sheldon directly:</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="50%" style="padding-right:12px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;">
            <p style="margin:0 0 4px;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Call or Text</p>
            <a href="tel:7272348296" style="color:#1e90ff;font-size:16px;font-weight:700;text-decoration:none;">727-234-8296</a>
          </div>
        </td>
        <td width="50%" style="padding-left:12px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;">
            <p style="margin:0 0 4px;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
            <a href="mailto:skmergers@gmail.com" style="color:#1e90ff;font-size:15px;font-weight:700;text-decoration:none;">skmergers@gmail.com</a>
          </div>
        </td>
      </tr>
    </table>
    ${divider()}
    <p style="margin:0;color:#94a3b8;font-size:12px;text-align:center;">
      Pinch A Penny Pool Store Resale Specialist &nbsp;·&nbsp; FL · TX · AZ · GA · LA · AL · NC · NV
    </p>
  `);
}

/* ─── New Market Form ──────────────────────────────────────────────────── */
export interface NewMarketPayload {
  name: string;
  email: string;
  market: string;
  details?: string;
}

export function newMarketAdminEmail(p: NewMarketPayload): string {
  return wrap("New Franchise Market Interest", `
    <h2 style="margin:0 0 4px;color:#0c2340;font-size:20px;font-weight:700;">New Market Candidate</h2>
    <p style="margin:0 0 24px;color:#64748b;font-size:14px;">Someone is interested in opening a Pinch-A-Penny franchise in a new market.</p>
    ${dataTable(
      row("Name", p.name) +
      row("Email", `<a href="mailto:${p.email}" style="color:#1e90ff;">${p.email}</a>`) +
      row("Desired Market", p.market) +
      row("Why This Market", p.details || "—")
    )}
    ${callout(`Add ${p.name.split(" ")[0]} to your new market candidate list. This builds the case for a corporate franchise contract — every submission counts.`)}
  `);
}

export function newMarketConfirmEmail(p: NewMarketPayload): string {
  return wrap("You're on the new market candidate list", `
    <h2 style="margin:0 0 4px;color:#0c2340;font-size:20px;font-weight:700;">Interest noted, ${p.name.split(" ")[0]}!</h2>
    <p style="margin:0 0 20px;color:#475569;font-size:14px;line-height:1.7;">
      Sheldon has added your interest in <strong>${p.market}</strong> to his new market candidate list.
      He's actively working to contract with Pinch-A-Penny corporate to sell new franchise locations —
      and submissions like yours directly strengthen that case.
    </p>
    ${callout(`When franchise opportunities open up in or near <strong>${p.market}</strong>, Sheldon will reach out to you first.`)}
    ${divider()}
    <p style="margin:0 0 12px;color:#1e293b;font-size:14px;font-weight:600;">Questions in the meantime?</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="50%" style="padding-right:12px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;">
            <p style="margin:0 0 4px;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Call or Text</p>
            <a href="tel:7272348296" style="color:#1e90ff;font-size:16px;font-weight:700;text-decoration:none;">727-234-8296</a>
          </div>
        </td>
        <td width="50%" style="padding-left:12px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;">
            <p style="margin:0 0 4px;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
            <a href="mailto:skmergers@gmail.com" style="color:#1e90ff;font-size:15px;font-weight:700;text-decoration:none;">skmergers@gmail.com</a>
          </div>
        </td>
      </tr>
    </table>
    ${divider()}
    <p style="margin:0;color:#94a3b8;font-size:12px;text-align:center;">
      Pinch A Penny Pool Store Resale Specialist &nbsp;·&nbsp; FL · TX · AZ · GA · LA · AL · NC · NV
    </p>
  `);
}
