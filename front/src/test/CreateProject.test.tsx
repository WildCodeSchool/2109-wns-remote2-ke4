import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateProject from '../pages/CreateProject';
import ModalAssignCreate from '../components/CreateProject/ModalAssignCreate';

describe('CreateProject', () => {
  it('Buttons invite dev', () => {
    const { getByText } = render(<CreateProject />);
    expect(getByText(/Inviter des utilisateurs/i)).toBeInTheDocument();
  });
  it('should to render Modal at the click Invit dev button', () => {
    const { getByText, getByTestId } = render(<CreateProject />);
    fireEvent.click(getByText(/Inviter des utilisateurs/i));
    expect(getByTestId('table-modal')).toBeInTheDocument();
  });
  it('Button create Project', () => {
    const { getByText } = render(<CreateProject />);

    const btn = expect(getByText(/Create Project/i));

    btn.toBeInTheDocument();
  });
  it('Button create Project should disable if title is undefined', () => {
    const { getByText } = render(<CreateProject />);
    const btn = expect(getByText(/Create Project/i));
    btn.toBeDisabled();
  });
  it('should render Textfield title', () => {
    const { getByTestId } = render(<CreateProject />);
    expect(getByTestId('title')).toBeInTheDocument();
  });
  it('Champs requis Textfield title', () => {
    const { getByTestId } = render(<CreateProject />);
    const inputTitle = expect(getByTestId('title'));
    inputTitle.toBeRequired();
  });
  it('should render Textfield dateDue', () => {
    const { getByTestId } = render(<CreateProject />);
    expect(getByTestId('dateDue')).toBeInTheDocument();
  });
  it('should render Textfield Description', () => {
    const { getByTestId } = render(<CreateProject />);
    expect(getByTestId('description')).toBeInTheDocument();
  });
  it('should render select Avatar Dev', () => {
    const { getByTestId } = render(<CreateProject />);
    expect(getByTestId('AvatarDev')).toBeInTheDocument();
  });
  it('should render Delete icons', async () => {
    const { getAllByTestId } = render(<CreateProject />);
    const deleteIcon = expect(getAllByTestId('delete'));
    deleteIcon.toBeTruthy();
  });
});
