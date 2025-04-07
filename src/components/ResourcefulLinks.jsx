const ResourcefulLinks = () => (
    <div className="resources">
      <table>
        <thead>
          <tr>
            <th>Resourceful Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="column example">
                <section className="portal">
                  <iframe src="https://inkarnate.com/login" title="Inkarnate"></iframe>
                  <p>Inkarnate [Map Making]</p>
                </section>
                <section className="portal">
                  <iframe src="https://www.aidedd.org/dnd-filters/feats.php" title="Aidedd"></iframe>
                  <p>Aidedd [Feats]</p>
                </section>
                <section className="portal">
                  <iframe src="https://rolladvantage.com/tokenstamp/" title="Token Stamp"></iframe>
                  <p>Token Stamp 2 [Map Icon Maker]</p>
                </section>
                <section className="portal">
                  <iframe src="https://online.anyflip.com/dkneq/yerq/mobile/index.html#p=4" title="Anyflip"></iframe>
                  <p>Anyflip [5e Player's Handbook]</p>
                </section>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  export default ResourcefulLinks;