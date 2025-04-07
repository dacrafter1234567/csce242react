import discordlogo from "../assets/discordlogo.png";

const DiscordSection = () => (
    <section className="bottomdiscord">
      <table>
        <thead>
          <tr>
            <th>Arconia Discord</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#"><img src={discordlogo} alt="Discord" /></a>
              <p>Join the World of Arconia's Discord! It has the developers of the setting, early access to new content, announcements/updates, and more!</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );

  export default DiscordSection;