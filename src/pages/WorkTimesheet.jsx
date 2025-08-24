import { useState } from 'react';
import SheetTable from '../components/SheetTable';

const engineers = [
  { name: 'Raghul', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1868088865' },
  { name: 'Krishna', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1138588463' },
  { name: 'Gokul', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1471581792' },
  { name: 'Tharun', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1985014595' },
  { name: 'Arunachalam', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1322616709' },
  { name: 'Naveethsheik', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1498776372' },
  { name: 'Surya krishna', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1585322234' },
  { name: 'Bhavesh Kumar', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1384165763' },
  { name: 'Harish', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '944272408' },
  { name: 'Subha', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '845384055' },
  { name: 'Lokesh', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1105656840' },
  { name: 'sabreena', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '1430458142' },
  { name: 'Renu', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '991469077' },
  { name: 'Ashik', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '674874977' },
  { name: 'Pradeep', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '2016231556' },
  { name: 'Hariprasath', sheetId: '1cu4k2YwjGaYUeJ2EAc2JQpm2XMeHzICeruZ9BIs0_Gs', gid: '572021586' },
];

function WorkTimesheet() {
  const [selectedEngineer, setSelectedEngineer] = useState('');
  const selectedEngineerObj = engineers.find(e => e.name === selectedEngineer);
  const selectedSheetId = selectedEngineerObj?.sheetId;
  const selectedGid = selectedEngineerObj?.gid;
  return (
    <div className="page-content">
      <h2>Work Timesheet</h2>
      <label htmlFor="engineer-select" style={{ fontWeight: 'bold', marginBottom: '1rem', display: 'block' }}>
        Select Cloud Engineer:
      </label>
      <select
        id="engineer-select"
        value={selectedEngineer}
        onChange={e => setSelectedEngineer(e.target.value)}
        style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '2rem', minWidth: '200px' }}
      >
        <option value="" disabled>Select engineer</option>
        {engineers.map(e => (
          <option key={e.gid} value={e.name}>{e.name}</option>
        ))}
      </select>
  {selectedSheetId && selectedGid && <SheetTable sheetId={selectedSheetId} gid={selectedGid} />}
      <p>Track your work hours and productivity here.</p>
    </div>
  );
}

export default WorkTimesheet;
